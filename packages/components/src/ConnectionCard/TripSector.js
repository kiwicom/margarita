// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Text, StyleSheet, CarrierLogo } from '@kiwicom/universal-components';

import TimelineArrow from './TimelineArrow';

type Props = {|
  +arrival: string,
  +arrivalTime: string,
  +carrier: $ElementType<
    $PropertyType<React.ElementProps<typeof CarrierLogo>, 'carriers'>,
    number,
  >,
  +tripDate: string,
  +departure: string,
  +departureTime: string,
  +duration: string,
|};

export default function TripSector({
  arrival,
  arrivalTime,
  carrier,
  departure,
  departureTime,
  duration,
  tripDate,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.carrierLogo}>
          <CarrierLogo size="medium" carriers={[carrier]} />
        </View>
        <View style={styles.tripItems}>
          <View style={styles.time}>
            <Text style={styles.highlightedText} numberOfLines={1}>
              {departureTime}
            </Text>
            <Text style={styles.highlightedText} numberOfLines={1}>
              {arrivalTime}
            </Text>
          </View>
          <TimelineArrow />
          <View style={styles.places}>
            <Text style={styles.text} numberOfLines={1}>
              {departure}
            </Text>
            <Text style={styles.text} numberOfLines={1}>
              {arrival}
            </Text>
          </View>
          <View style={styles.infoItems}>
            <Text style={[styles.text, styles.info]} numberOfLines={1}>
              {tripDate}
            </Text>
            <Text style={[styles.text, styles.info]} numberOfLines={1}>
              {duration}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

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
