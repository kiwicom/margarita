// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Badge,
  LocalizedPrice,
  StyleSheet,
} from '@kiwicom/universal-components';
import { formatPrice } from '@kiwicom/margarita-utils';

import ConnectionCardRow from './ConnectionCardRow';
import TripSegment from './TripSegment';
import type { TripSegmentWithId } from './ConnectionCardTypes';
import BadgesContainer from './BadgesContainer';
import HorizontalDash from './HorizontalDash';

type Props = {|
  +padding?: boolean,
  +wayForth: Array<TripSegmentWithId>,
  +wayBack?: Array<TripSegmentWithId>,
  +duration?: string,
  ...React.ElementProps<typeof BadgesContainer>,
  +price: {|
    +amount: number,
    +currency: string,
  |},
|};

type TripSegmentProps = {|
  +way?: Array<TripSegmentWithId>,
|};

const TripSegments = ({ way }: TripSegmentProps) => {
  if (way == null) {
    return null;
  }
  return way.map(connection => (
    <TripSegment
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
  price,
  duration,
  badges,
}: Props) {
  const hasWayBack = wayBack && wayBack.length > 0;
  return (
    <View style={styles.container}>
      <View
        style={padding ? styles.paddingHorizontal : styles.noPaddingHorizontal}
      >
        <ConnectionCardRow>
          <TripSegments way={wayForth} />
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
              <TripSegments way={wayBack} />
            </ConnectionCardRow>
          </React.Fragment>
        )}
      </View>
      <HorizontalDash />
      <View
        style={padding ? styles.paddingHorizontal : styles.noPaddingHorizontal}
      >
        <ConnectionCardRow style={styles.lastRow}>
          <BadgesContainer badges={badges} />
          <LocalizedPrice localizedPrice={formatPrice(price)} />
        </ConnectionCardRow>
      </View>
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
    marginBottom: 5,
    marginTop: 2,
  },
  leftShift: {
    paddingStart: 103,
  },
  paddingHorizontal: {
    paddingHorizontal: 10,
  },
  noPaddingHorizontal: {
    paddingHorizontal: 0,
  },
});
