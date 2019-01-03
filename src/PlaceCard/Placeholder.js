// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Shimmer from '../Placeholder/shimmer';
import connect from '../Placeholder/connect';
import { StyleSheet } from '../PlatformStyleSheet';

const Placeholder = () => (
  <View style={styles.container}>
    <View style={styles.pricePlaceholder}>
      <Shimmer style={[styles.defaultPlaceholder, styles.large]} />
    </View>
    <View style={[styles.bottomContainer, styles.padding]}>
      <View style={styles.placePlacholder}>
        <Shimmer style={[styles.defaultPlaceholder, styles.small]} />
      </View>
      <View style={styles.countryPlaceholder}>
        <Shimmer style={[styles.defaultPlaceholder, styles.small]} />
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

export default connect(Placeholder);
