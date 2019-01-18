// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { StyleSheet } from '@kiwicom/universal-components';
import { tokens } from '@kiwicom/margarita-utils';

import { Shimmer } from '../Shimmer';

const Placeholder = () => (
  <View style={styles.container}>
    <View style={styles.pricePlaceholder}>
      <Shimmer
        style={[styles.defaultPlaceholder, styles.large]}
        width={tokens.widthShimmerSmall}
        height={tokens.heightShimmerMedium}
      />
    </View>
    <View style={[styles.bottomContainer, styles.padding]}>
      <View style={styles.placePlaceholder}>
        <Shimmer
          width={tokens.widthShimmerLarge}
          height={tokens.heightShimmerSmall}
          style={[styles.defaultPlaceholder, styles.small]}
        />
      </View>
      <View style={styles.countryPlaceholder}>
        <Shimmer
          width={tokens.widthShimmerMedium}
          height={tokens.heightShimmerSmall}
          style={[styles.defaultPlaceholder, styles.small]}
        />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: tokens.heightPlaceCard,
    justifyContent: 'space-between',
    borderRadius: parseFloat(defaultTokens.borderRadiusLarge),
    overflow: 'hidden',
    backgroundColor: defaultTokens.paletteCloudLight,
  },
  pricePlaceholder: {
    width: tokens.widthShimmerMedium,
    padding: 10,
  },
  small: {
    height: parseFloat(defaultTokens.heightIconSmall),
  },
  large: {
    height: parseFloat(defaultTokens.heightIconMedium),
  },
  placePlaceholder: {
    marginBottom: 4,
    width: tokens.widthShimmerLarge,
  },
  countryPlaceholder: {
    width: tokens.widthShimmerMedium,
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
