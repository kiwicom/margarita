// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Text, StyleSheet, CarrierLogo } from '@kiwicom/universal-components';
import * as DateFNS from 'date-fns';
import { uniq } from 'ramda';

import type { Segment } from './ItineraryCardTypes';
import TimelineArrow from './TimelineArrow';

type Props = {|
  +segment: Segment,
|};
const timeSimpleFormat = 'H:mm';
const dateFormat = 'ddd D MMM';

const getFormattedDate = (time, format = timeSimpleFormat) =>
  DateFNS.format(DateFNS.parse(time), format);

const getDuration = durationInMinutes => {
  return (
    durationInMinutes &&
    `${Math.floor(durationInMinutes / 60)}h ${durationInMinutes % 60}m`
  );
};

const mapCarriers = transporters => {
  const carriers =
    transporters && Array.isArray(transporters)
      ? uniq(
          transporters.map(t => ({
            name: '',
            code: t && t.name,
          })),
        )
      : [
          {
            name: '',
            code: transporters?.name,
          },
        ];

  return carriers;
};

export default function TripSegment({ segment }: Props) {
  console.log('segment.transporter', segment.transporter);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.carrierLogo}>
          <CarrierLogo
            size="medium"
            carriers={mapCarriers(segment.transporter)}
          />
        </View>
        <View style={styles.tripItems}>
          <View style={styles.time}>
            <Text style={styles.highlightedText} numberOfLines={1}>
              {getFormattedDate(segment.departureTime?.local)}
            </Text>
            <Text style={styles.highlightedText} numberOfLines={1}>
              {getFormattedDate(segment.arrivalTime?.local)}
            </Text>
          </View>
          <TimelineArrow />
          <View style={styles.places}>
            <Text style={styles.text} numberOfLines={1}>
              {segment.origin?.name}
            </Text>
            <Text style={styles.text} numberOfLines={1}>
              {segment.destination?.name}
            </Text>
          </View>
          <View style={styles.infoItems}>
            <Text style={[styles.text, styles.info]} numberOfLines={1}>
              {getFormattedDate(segment.departureTime?.local, dateFormat)}
            </Text>
            <Text style={[styles.text, styles.info]} numberOfLines={1}>
              {getDuration(segment.duration)}
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
