// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Text, StyleSheet } from '@kiwicom/universal-components';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import type { TripSector as TripSectorType } from './__generated__/TripSector.graphql';
import TimelineArrow from './TimelineArrow';
import Transporters from './Transporters';
import FlightTimes from './FlightTimes';
import LocalTime from './LocalTime';
import TripCities from './TripCities';
import { getDuration, dateFormat } from './TripSectorHelpers';

type Props = {|
  +data: ?TripSectorType,
|};

function TripSector({ data }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.carrierLogo}>
          <Transporters data={data} />
        </View>
        <View style={styles.tripItems}>
          <View style={styles.time}>
            <FlightTimes data={data} />
          </View>
          <TimelineArrow />
          <View style={styles.places}>
            <TripCities data={data} />
          </View>
          <View style={styles.infoItems}>
            <LocalTime
              data={data?.departure}
              dateFormat={dateFormat}
              style={[styles.text, styles.info]}
            />
            <Text style={[styles.text, styles.info]} numberOfLines={1}>
              {getDuration(data?.duration)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default createFragmentContainer(
  TripSector,
  graphql`
    fragment TripSector on Sector {
      duration
      ...FlightTimes
      ...TripCities
      departure {
        ...LocalTime
      }
      duration
      ...Transporters
    }
  `,
);

const styles = StyleSheet.create({
  container: {
    height: 70,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 0,
  },
  carrierLogo: {
    width: 30,
  },
  tripItems: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
  },
  time: {
    minWidth: 65,
    paddingHorizontal: 10,
  },
  places: {
    flex: 1,
  },
  text: {
    fontSize: parseFloat(defaultTokens.fontSizeTextSmall),
    lineHeight: 17,
    padding: 5,
  },
  infoItems: {
    alignItems: 'flex-end',
  },
  info: {
    color: defaultTokens.colorTextSecondary,
  },
});
