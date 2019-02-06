// @flow

import * as React from 'react';
import { StyleSheet, Badge } from '@kiwicom/universal-components';
import { View } from 'react-native';
import * as DateFNS from 'date-fns';

import type { Sector, Segment } from './ItineraryCardTypes';
import ItineraryCardRow from './ItineraryCardRow';

type Props = {|
  +sectors: ?$ReadOnlyArray<?Sector>,
  +sector: ?Sector,
  +sectorIndex: number,
  +segment: ?Segment,
  +segmentIndex: number,
|};

const getDuration = (arrivalTime, departureTime) => {
  return DateFNS.distanceInWords(departureTime, arrivalTime);
};

export default function SectorBorder({
  sectors,
  sector,
  sectorIndex,
  segment,
  segmentIndex,
}: Props) {
  const showSectorBorder =
    sectors &&
    segmentIndex + 1 === sector?.segments?.length &&
    sectorIndex !== sectors.length - 1;

  return showSectorBorder ? (
    <ItineraryCardRow>
      <View style={styles.leftShift}>
        <Badge type="neutral">
          Returns in{' '}
          {getDuration(
            segment?.departureTime?.utc,
            sectors?.[sectorIndex + 1]?.segments?.[0]?.arrivalTime?.utc,
          )}
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
