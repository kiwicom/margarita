// @flow

import * as React from 'react';
import { StyleSheet, Badge } from '@kiwicom/universal-components';
import { View } from 'react-native';
import * as DateFNS from 'date-fns';

import ItineraryCardRow from './ItineraryCardRow';

type Props = {|
  +stopoverDuration: ?number,
  +locationName: ?string,
|};

const getDuration = stopoverDuration => {
  const durationDateFrom = new Date(0, 0, 0, 0, 0);
  const durationDateTo = new Date(0, 0, 0, 0, stopoverDuration);
  return DateFNS.distanceInWords(durationDateFrom, durationDateTo);
};

export default function StopoverDuration({
  stopoverDuration,
  locationName,
}: Props) {
  return stopoverDuration ? (
    <ItineraryCardRow>
      <View style={styles.leftShift}>
        <Badge type="neutral">
          Stays {getDuration(stopoverDuration)}
          {locationName && ` in ${locationName}`}
        </Badge>
      </View>
    </ItineraryCardRow>
  ) : null;
}
const styles = StyleSheet.create({
  leftShift: {
    paddingStart: 103,
  },
});
