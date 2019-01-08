// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Badge,
  LocalizedPrice,
  StyleSheet,
} from '@kiwicom/universal-components';

import ConnectionCardRow from './ConnectionCardRow';
import TripSector from './TripSector';
import BadgesContainer from './BadgesContainer';
import HorizontalDash from './HorizontalDash';

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
  +price: {
    +amount?: number,
    +currency?: string,
    +locale?: string,
  },
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
  price,
  duration,
  badges,
}: Props) {
  const localizedPrice = price =>
    price &&
    new Intl.NumberFormat(price.locale, {
      style: 'currency',
      currency: price.currency,
    }).format(price.amount ?? 0);
  const hasWayBack = wayBack && wayBack.length > 0;
  return (
    <View style={styles.container}>
      <View
        style={padding ? styles.paddingHorizontal : styles.noPaddingHorizontal}
      >
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
      </View>
      <HorizontalDash />
      <View
        style={padding ? styles.paddingHorizontal : styles.noPaddingHorizontal}
      >
        <ConnectionCardRow style={styles.lastRow}>
          <BadgesContainer badges={badges} />
          <LocalizedPrice localizedPrice={localizedPrice(price)} />
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
