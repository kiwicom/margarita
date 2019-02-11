// @flow

import * as React from 'react';
import { StyleSheet, Badge } from '@kiwicom/universal-components';
import { View } from 'react-native';
import * as DateFNS from 'date-fns';

import ItineraryCardRow from './ItineraryCardRow';

type Props = {|
  from: ?Date,
  to: ?Date,
|};

const getDuration = (arrivalTime, departureTime) => {
  return DateFNS.distanceInWords(departureTime, arrivalTime);
};

export default function SectorBorder({ from, to }: Props) {
  return (
    <ItineraryCardRow>
      <View style={styles.leftShift}>
        <Badge type="neutral">Returns in {getDuration(from, to)}</Badge>
      </View>
    </ItineraryCardRow>
  );
}
const styles = StyleSheet.create({
  leftShift: {
    paddingStart: 103,
  },
});
