// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { StyleSheet } from '../PlatformStyleSheet';
import Segment from './Segment';

export type Props = {|
  /**
   * Array with segments data
   */
  +segmentsData: $ReadOnlyArray<{|
    +label: string,
    +value: string,
  |}>,
  /**
   * Selected segment value
   */
  +selectedValue: ?string,
  /**
   * Dispatched on segment press
   */
  +onValueChange: (?string) => void,
|};

const SegmentedButton = ({
  segmentsData,
  selectedValue,
  onValueChange,
}: Props) => {
  const segments = segmentsData.map((segmentData, index) => {
    const { value, label } = segmentData;
    return (
      <Segment
        key={value}
        label={label}
        value={value}
        first={index === 0}
        last={index === segmentsData.length - 1}
        active={value === selectedValue}
        onPress={onValueChange}
      />
    );
  });
  return <View style={styles.container}>{segments}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: parseInt(defaultTokens.spaceXXXSmall, 10),
    backgroundColor: defaultTokens.backgroundButtonSecondary,
    borderRadius: parseInt(defaultTokens.borderRadiusNormal, 10),
  },
});

export default SegmentedButton;
