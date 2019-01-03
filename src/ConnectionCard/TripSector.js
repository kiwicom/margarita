// @flow

import * as React from 'react';
import { View, Image } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Text } from '../Text';
import StyleSheet from '../PlatformStyleSheet';
import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';
import { CarrierLogo } from '../CarrierLogo';
import type { TripSectorProps } from './ConnectionCardTypes';
import Timeline from './assets/timeline.png';

export default class TripSector extends React.Component<TripSectorProps> {
  renderText = (text: string, style: StylePropType) => (
    <Text style={[styles.text, style]} numberOfLines={1}>
      {text}
    </Text>
  );

  render() {
    const {
      arrival,
      arrivalTime,
      carrier,
      departure,
      departureTime,
      duration,
      tripDate,
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.carrierLogo}>
            <CarrierLogo size="medium" carriers={[carrier]} />
          </View>
          <View style={styles.tripItems}>
            <View style={styles.time}>
              <Text numberOfLines={1}>{departureTime}</Text>
              <Text numberOfLines={1}>{arrivalTime}</Text>
            </View>
            <Image style={styles.timeline} source={Timeline} />
            <View style={styles.places}>
              {this.renderText(departure)}
              {this.renderText(arrival)}
            </View>
            <View style={styles.infoItems}>
              {this.renderText(tripDate, styles.info)}
              {this.renderText(duration, styles.info)}
            </View>
          </View>
        </View>
      </View>
    );
  }
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
    width: 60,
    fontWeight: 'bold',
    fontSize: parseFloat(defaultTokens.fontSizeTextNormal),
    lineHeight: 19,
    paddingHorizontal: 10,
  },
  places: {
    flex: 1,
  },
  text: {
    fontSize: parseFloat(defaultTokens.fontSizeTextSmall),
    lineHeight: 17,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  infoItems: {
    alignItems: 'flex-end',
  },
  info: {
    color: defaultTokens.colorTextSecondary,
  },
  timeline: {},
});
