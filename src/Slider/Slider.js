// @flow

import * as React from 'react';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { View } from 'react-native';
import MultiSlider from 'react-native-multi-slider';

import Marker from './Marker';
import { Text } from '../Text';
import { StyleSheet } from '../PlatformStyleSheet';

const LABEL_LENGTH = 200;
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
  +onValuesChange?: () => void,
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

    if (endValue > maxValue) {
      console.error('End value cannot be equal or higher than maximum value');
    }

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
    onValuesChange && onValuesChange();
  };

  multiSliderValuesChange = (values: Array<number>) => {
    const { onValuesChange } = this.props;
    this.setState({
      multiSliderValues: values,
    });
    onValuesChange && onValuesChange();
  };

  calculateOffset = (value: number) => {
    const { minValue, maxValue } = this.props;
    const { width } = this.state;
    return (value * width) / (maxValue - minValue) - LABEL_LENGTH / 2;
  };

  createParts = () => {
    const { numOfParts = 1, minValue, maxValue } = this.props;
    const step = (maxValue - minValue) / numOfParts;

    const parts = [];
    let i;

    if (numOfParts != null && numOfParts < 1) {
      console.error('numOfParts cannot be lower than 1');
    }

    for (i = 0; i <= numOfParts; i++) {
      const valuePerStep = Math.floor(step * i);

      parts.push(
        <View
          key={i}
          style={[
            styles.partStyle,
            {
              left: this.calculateOffset(valuePerStep),
            },
          ]}
        >
          <View style={styles.partBorder} />
          <Text size="small" style={styles.labelText}>
            {valuePerStep + minValue}
          </Text>
        </View>
      );
    }
    return parts;
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
    } = this.props;
    const { multiSliderValues, width, singleSliderValue } = this.state;

    const typeLineStyle =
      type === 'single' && singleSliderValue[0] >= minValue
        ? styles.selected
        : styles.unselected;

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
                <View>{this.createParts()}</View>
                <View
                  style={[
                    styles.trackLine,
                    typeLineStyle,
                    {
                      right: 0,
                      width: width + 10,
                    },
                  ]}
                />
                <View
                  style={[
                    styles.trackLine,
                    styles.unselected,
                    {
                      left: 0,
                      width: width + 10,
                    },
                  ]}
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
  trackLine: {
    borderRadius: 5,
    height: TRACK_HEIGHT,
    position: 'absolute',
    top: 25 - TRACK_HEIGHT / 2,
    alignSelf: 'center',
  },
  partStyle: {
    position: 'absolute',
    width: LABEL_LENGTH,
    alignItems: 'center',
  },
  partBorder: {
    position: 'absolute',
    borderStartWidth: 2,
    borderStartColor: defaultTokens.paletteCloudLightHover,
    height: 34,
    top: 8,
  },
  labelContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelText: {
    top: 50,
    position: 'absolute',
  },
  resultContainer: {
    flexDirection: 'row',
    backgroundColor: defaultTokens.paletteBlueNormal,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
});
