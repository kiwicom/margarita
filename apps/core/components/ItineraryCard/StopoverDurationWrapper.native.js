// @flow

import * as React from 'react';
import { StyleSheet, Badge } from '@kiwicom/universal-components';
import { View } from 'react-native';

import ItineraryCardRow from './ItineraryCardRow';

type Props = {|
  +children: React.Node,
|};

export default function StopoverDurationWrapper({ children }: Props) {
  return (
    <ItineraryCardRow>
      <View style={styles.leftShift}>
        <Badge type="neutral">{children}</Badge>
      </View>
    </ItineraryCardRow>
  );
}

const styles = StyleSheet.create({
  leftShift: {
    paddingStart: 103,
  },
});
