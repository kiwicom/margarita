// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { StyleSheet } from '@kiwicom/universal-components';

import { Shimmer } from '../shimmer';

const Placeholder = () => (
  <View style={styles.container}>
    <View style={styles.pricePlaceholder}>
      <Shimmer
        style={[styles.defaultPlaceholder, styles.large]}
        width={80}
        height={25}
      />
    </View>
    <View style={[styles.bottomContainer, styles.padding]}>
      <View style={styles.placePlacholder}>
        <Shimmer
          width={200}
          height={16}
          style={[styles.defaultPlaceholder, styles.small]}
        />
      </View>
      <View style={styles.countryPlaceholder}>
        <Shimmer
          width={100}
          height={16}
          style={[styles.defaultPlaceholder, styles.small]}
        />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 152,
    justifyContent: 'space-between',
    borderRadius: parseFloat(defaultTokens.borderRadiusLarge),
    overflow: 'hidden',
    backgroundColor: defaultTokens.paletteCloudLight,
  },
  pricePlaceholder: {
    width: 100,
    padding: 10,
  },
  small: {
    height: 16,
  },
  large: {
    height: 25,
  },
  placePlacholder: {
    marginBottom: 4,
    width: 200,
  },
  countryPlaceholder: {
    width: 100,
  },
  padding: {
    padding: 10,
  },
  defaultPlaceholder: {
    backgroundColor: defaultTokens.paletteCloudLightActive,
    borderRadius: parseFloat(defaultTokens.borderRadiusLarge),
  },
});

export default Placeholder;
