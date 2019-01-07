// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Badge, StyleSheet } from '@kiwicom/universal-components';
// LocalizedPrice,

import ConnectionCardRow from './ConnectionCardRow';
import TripSector from './TripSector';
import BadgesContainer from './BadgesContainer';

type TripSectorWithId = {
  ...React.ElementProps<typeof TripSector>,
  id: number,
};

type Props = {|
  +padding?: boolean,
  +wayForth: Array<TripSectorWithId>,
  +wayBack?: Array<TripSectorWithId>,
  +duration?: string,
  ...React.ElementProps<typeof BadgesContainer>,
  // ...React.ElementProps<typeof LocalizedPrice>,
|};

type RenderTripSectorProps = {|
  +way?: Array<TripSectorWithId>,
|};

const RenderTripSectors = ({ way }: RenderTripSectorProps) => {
  if (way == null) {
    return null;
  }
  return way.map(connection => (
    <TripSector
      key={connection.id}
      arrival={connection.arrival}
      arrivalTime={connection.arrivalTime}
      carrier={connection.carrier}
      tripDate={connection.tripDate}
      departure={connection.departure}
      departureTime={connection.departureTime}
      duration={connection.duration}
    />
  ));
};

export default function ConnectionCard({
  padding = true,
  wayForth,
  wayBack,
  // localizedPrice,
  duration,
  badges,
}: Props) {
  const hasWayBack = wayBack && wayBack.length > 0;
  return (
    <View style={[styles.container, { paddingHorizontal: padding ? 10 : 0 }]}>
      <ConnectionCardRow>
        <RenderTripSectors way={wayForth} />
      </ConnectionCardRow>
      {hasWayBack && (
        <React.Fragment>
          {duration && (
            <ConnectionCardRow>
              <View style={styles.leftShift}>
                <Badge type="neutral">Returns in {duration}</Badge>
              </View>
            </ConnectionCardRow>
          )}
          <ConnectionCardRow>
            <RenderTripSectors way={wayBack} />
          </ConnectionCardRow>
        </React.Fragment>
      )}
      <ConnectionCardRow style={styles.lastRow}>
        <BadgesContainer badges={badges} />
        {/* <LocalizedPrice localizedPrice={localizedPrice} /> */}
      </ConnectionCardRow>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lastRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  leftShift: {
    paddingStart: 103,
  },
});
