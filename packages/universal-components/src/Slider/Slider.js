// @flow

import * as React from 'react';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { View } from 'react-native';
import MultiSlider from 'react-native-multi-slider';

import Marker from './Marker';
import SliderParts from './SliderParts';
import { Text } from '../Text';
import { StyleSheet } from '../PlatformStyleSheet';

const TRACK_HEIGHT = 4;

type Props = {|
  +type: 'multi' | 'single',
  +minValue: number,
  +maxValue: number,
  +startValue: number,
  +endValue?: number,
  +label: string | React.Node,
  +numOfParts?: number,
  +snapped?: boolean,
  +step?: number,
  +customMarker?: React.Node,
  +sliderLength?: number,
  +onValuesChange?: (Array<number>) => void,
  +onValuesChangeFinish?: (Array<number>) => void,
  +onValuesChangeStart?: () => void,
|};

type OnLayout = {
  +nativeEvent: {
    +layout: {
      +x: number,
      +y: number,
      +width: number,
      +height: number,
    },
  },
};

type State = {
  multiSliderValues: Array<number>,
  singleSliderValue: Array<number>,
  width: number,
};

export default class Slider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const { maxValue, startValue, endValue = maxValue } = this.props;

    this.state = {
      width: 0,
      multiSliderValues: [startValue, endValue],
      singleSliderValue: [startValue],
    };
  }

  sliderOneValuesChange = (values: Array<number>) => {
    const { onValuesChange } = this.props;
    this.setState({
      singleSliderValue: values,
    });
    if (onValuesChange != null) {
      onValuesChange(values);
    }
  };

  multiSliderValuesChange = (values: Array<number>) => {
    const { onValuesChange } = this.props;
    this.setState({
      multiSliderValues: values,
    });
    if (onValuesChange != null) {
      onValuesChange(values);
    }
  };

  onLayout = ({ nativeEvent }: OnLayout) => {
    const { sliderLength } = this.props;
    this.setState({
      width: sliderLength || nativeEvent.layout.width,
    });
  };

  render() {
    const {
      minValue,
      maxValue,
      snapped = false,
      label,
      step = 1,
      type,
      customMarker,
      onValuesChangeFinish,
      onValuesChangeStart,
      numOfParts,
    } = this.props;
    const { multiSliderValues, width, singleSliderValue } = this.state;

    const labelValue =
      type === 'multi'
        ? `${multiSliderValues[0]} - ${multiSliderValues[1]}`
        : singleSliderValue;

    const onValuesChange =
      type === 'multi'
        ? this.multiSliderValuesChange
        : this.sliderOneValuesChange;

    const values =
      type === 'multi'
        ? [multiSliderValues[0], multiSliderValues[1]]
        : singleSliderValue;

    return (
      <View style={styles.container}>
        <View style={styles.labelContainer}>
          <Text weight="bold">{label} </Text>
          <View style={styles.resultContainer}>
            <Text type="white" weight="bold">
              {labelValue}
            </Text>
          </View>
        </View>
        <View style={styles.slider}>
          <View onLayout={this.onLayout}>
            <View style={styles.contentContainer}>
              <View>
                <SliderParts
                  width={width}
                  minValue={minValue}
                  maxValue={maxValue}
                  numOfParts={numOfParts}
                  type={type}
                  singleSliderValue={singleSliderValue}
                />
                <MultiSlider
                  values={values}
                  sliderLength={width}
                  onValuesChange={onValuesChange}
                  min={minValue}
                  max={maxValue}
                  step={step}
                  trackStyle={styles.track}
                  selectedStyle={styles.selected}
                  unselectedStyle={styles.unselected}
                  customMarker={customMarker || Marker}
                  snapped={snapped}
                  onValuesChangeFinish={onValuesChangeFinish}
                  onValuesChangeStart={onValuesChangeStart}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    paddingHorizontal: 30,
  },
  track: {
    height: TRACK_HEIGHT,
  },
  selected: {
    backgroundColor: defaultTokens.paletteBlueNormal,
  },
  unselected: {
    backgroundColor: defaultTokens.paletteInkLighter,
  },
  labelContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  resultContainer: {
    flexDirection: 'row',
    backgroundColor: defaultTokens.paletteBlueNormal,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
});
