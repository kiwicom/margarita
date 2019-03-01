// @flow

import * as React from 'react';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { View } from 'react-native';

import { Text } from '../Text';
import { StyleSheet } from '../PlatformStyleSheet';

const LABEL_LENGTH = 200;
const TRACK_HEIGHT = 4;

type Props = {|
  +type: 'multi' | 'single',
  +minValue: number,
  +maxValue: number,
  +numOfParts?: number,
  +singleSliderValue: Array<number>,
  +width: number,
|};

export default function SliderParts({
  minValue,
  maxValue,
  width,
  numOfParts = 1,
  singleSliderValue,
  type,
}: Props) {
  const calculateOffset = (value: number) =>
    (value * width) / (maxValue - minValue) - LABEL_LENGTH / 2;

  const createParts = () => {
    const step = (maxValue - minValue) / numOfParts;

    const parts = [];
    let i;

    for (i = 0; i <= numOfParts; i++) {
      const valuePerStep = Math.floor(step * i);

      parts.push(
        <View
          key={i}
          style={[
            styles.partStyle,
            {
              left: calculateOffset(valuePerStep),
            },
          ]}
        >
          <View style={styles.partBorder} />
          <Text size="small" style={styles.labelText}>
            {valuePerStep + minValue}
          </Text>
        </View>,
      );
    }
    return parts;
  };

  const typeLineStyle =
    type === 'single' && singleSliderValue[0] >= minValue
      ? styles.selected
      : styles.unselected;

  return (
    <View>
      <View>{createParts()}</View>
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
    </View>
  );
}

const styles = StyleSheet.create({
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
  labelText: {
    top: 50,
    position: 'absolute',
  },
});
