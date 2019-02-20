// @flow strict

import * as React from 'react';
import { View, Image, Platform } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  Icon,
  StyleSheet,
  AdaptableBadge,
} from '@kiwicom/universal-components';

import AlphaToWhite from './assets/alpha-to-white-horizontal.png';
import Text from '../text/Text';

type Trip = {|
  +city: string,
  +localizedDate: string,
|};

type Props = {|
  +tripType?: 'OneWay' | 'Return' | 'MultiCity',
  +arrival?: Trip,
  +departure?: Trip,
|};

export default function SearchParamsSummary({
  tripType,
  arrival,
  departure,
}: Props) {
  let icon = '';

  switch (tripType) {
    case 'OneWay':
      icon = 'flight-direct';
      break;
    case 'Return':
      icon = 'flight-return';
      break;
    case 'MultiCity':
      icon = 'flight-multicity';
      break;
    default:
      icon = 'flight-return';
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerLeftContainer}>
        {Platform.OS !== 'web' && (
          <Image
            source={AlphaToWhite}
            style={styles.gradientOverlap}
            resizeMode="stretch"
          />
        )}
        <View style={styles.citiesContainer}>
          <Text weight="bold" style={styles.city}>
            {departure?.city}
          </Text>
          <Icon name={icon} />
          <Text weight="bold" style={styles.city}>
            {arrival?.city}
          </Text>
        </View>

        <View style={styles.date}>
          {tripType === 'OneWay' ? (
            <AdaptableBadge
              style={styles.badge}
              textStyle={styles.badgeText}
              text={departure?.localizedDate}
            />
          ) : (
            <>
              <AdaptableBadge
                style={styles.badge}
                textStyle={styles.badgeText}
                text={departure?.localizedDate}
              />
              <Text style={styles.connector}> to </Text>
              {/* @TODO localize string `to` */}
              <AdaptableBadge
                style={styles.badge}
                textStyle={styles.badgeText}
                text={arrival?.localizedDate}
              />
            </>
          )}
        </View>
      </View>
    </View>
  );
}

const headerHeight = 72;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: headerHeight,
    borderBottomWidth: 1,
    borderBottomColor: defaultTokens.paletteInkLighter,
    paddingLeft: 16,
  },
  connector: {
    color: defaultTokens.paletteInkDark,
    paddingHorizontal: 4,
  },
  citiesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
  },
  headerLeftContainer: {
    flexDirection: 'column',
    paddingStart: 16,
    ios: {
      paddingLeft: 16,
    },
    android: {
      paddingLeft: 40,
    },
    alignItems: Platform.OS === 'web' ? 'center' : null,
    flex: 1,
  },
  city: {
    marginEnd: 5,
    fontSize: parseFloat(defaultTokens.fontSizeTextLarge),
    color: defaultTokens.colorTextAttention,
  },
  badgeText: {
    fontSize: parseFloat(defaultTokens.fontSizeTextSmall),
    color: defaultTokens.colorTextPrimary,
  },
  badge: {
    backgroundColor: defaultTokens.paletteCloudNormal,
    alignSelf: 'center',
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
  },
  gradientOverlap: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: headerHeight - 1,
    zIndex: parseFloat(defaultTokens.zIndexDefault),
  },
});
