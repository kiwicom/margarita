// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import AdaptableBadge from '../shared/AdaptableBadge';
import { Icon } from '../Icon';
import { Text } from '../Text';
import StyleSheet from '../PlatformStyleSheet';

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
      <View style={styles.headerLeftcontainer}>
        <View style={styles.citiesContainer}>
          <Text style={styles.departureCity}>{departure?.city || ''}</Text>
          <Icon name={icon} />
          <Text style={styles.arrivalCity}>{arrival?.city || ''}</Text>
        </View>
        {arrival != null && departure != null && (
          <View>
            {tripType === 'OneWay' ? (
              <View>
                <AdaptableBadge
                  style={styles.badge}
                  textStyle={styles.badgeText}
                  text={arrival.localizedDate}
                />
              </View>
            ) : (
              <View style={styles.row}>
                <AdaptableBadge
                  style={styles.badge}
                  textStyle={styles.badgeText}
                  text={departure.localizedDate}
                />
                <Text style={styles.connector}> to </Text>
                <AdaptableBadge
                  style={styles.badge}
                  textStyle={styles.badgeText}
                  text={arrival.localizedDate}
                />
              </View>
            )}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    borderBottomWidth: 1,
    borderBottomColor: defaultTokens.paletteInkLighter,
  },
  connector: {
    color: defaultTokens.paletteInkDark,
  },
  citiesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 3,
    paddingTop: 8,
  },
  headerLeftcontainer: {
    flexDirection: 'column',
    paddingStart: 16,
  },
  departureCity: {
    fontWeight: 'bold',
    marginEnd: 5,
    fontSize: parseFloat(defaultTokens.fontSizeTextLarge),
    color: defaultTokens.colorTextAttention,
  },
  arrivalCity: {
    fontWeight: 'bold',
    marginStart: 5,
    fontSize: parseFloat(defaultTokens.fontSizeTextLarge),
    color: defaultTokens.colorTextAttention,
  },
  badgeText: {
    fontSize: parseFloat(defaultTokens.fontSizeTextSmall),
    color: defaultTokens.colorTextPrimary,
  },
  badge: {
    backgroundColor: defaultTokens.paletteCloudNormal,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
