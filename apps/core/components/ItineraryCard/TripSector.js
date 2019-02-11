// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Text, StyleSheet } from '@kiwicom/universal-components';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import type { TripSector as TripSectorType } from './__generated__/TripSector.graphql';
import TimelineArrow from './TimelineArrow';
import Transporters from './Transporters';
import LocalTime from './LocalTime';
import LocationName from './LocationName';
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
            <LocalTime
              data={data?.departureTime}
              style={styles.highlightedText}
            />
            <LocalTime
              data={data?.arrivalTime}
              style={styles.highlightedText}
            />
          </View>
          <TimelineArrow />
          <View style={styles.places}>
            <LocationName data={data?.origin} style={styles.text} />
            <LocationName data={data?.destination} style={styles.text} />
          </View>
          <View style={styles.infoItems}>
            <LocalTime
              data={data?.departureTime}
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
      arrivalTime {
        ...LocalTime
      }
      departureTime {
        ...LocalTime
      }
      destination {
        ...LocationName
      }
      duration
      origin {
        ...LocationName
      }
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
  highlightedText: {
    fontWeight: 'bold',
    fontSize: parseFloat(defaultTokens.fontSizeTextNormal),
    color: defaultTokens.colorTextAttention,
    padding: 5,
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
