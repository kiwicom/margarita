// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { StyleSheet, Text } from '@kiwicom/universal-components';

type PassengerInfoItineraryCardProps = {|
  +adults: number,
  +infants: number,
|};

export default function PassengerInfoItineraryCard({
  adults,
  infants,
}: PassengerInfoItineraryCardProps) {
  return (
    <View style={styles.container}>
      {adults > 0 && (
        <Text style={styles.passengerNumberText} size="small" type="secondary">
          {`${adults} Adult${adults > 1 ? 's' : ''}`}
        </Text>
      )}
      {infants > 0 && (
        <Text
          style={[
            styles.passengerNumberText,
            Platform.OS !== 'web' && styles.infantsTextMobile,
          ]}
          size="small"
          type="secondary"
        >
          {`${infants} Infant${infants > 1 ? 's' : ''}`}
        </Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  passengerNumberText: {
    paddingTop: parseInt(defaultTokens.spaceXXXSmall, 10),
  },
  container: {
    paddingTop: parseInt(defaultTokens.spaceXSmall, 10),
    flexDirection: 'row',
    web: {
      flexDirection: 'column',
    },
  },
  infantsTextMobile: {
    paddingStart: parseInt(defaultTokens.spaceXSmall, 10),
    web: {
      paddingStart: 0,
    },
  },
});
