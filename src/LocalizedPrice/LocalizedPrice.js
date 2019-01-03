// @flow

import * as React from 'react';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Text } from '../Text';
import { StyleSheet } from '../PlatformStyleSheet';
import type { LocalizedPriceProps } from './LocalizedPriceTypes';

export default function LocalizedPrice({
  localizedPrice,
}: LocalizedPriceProps) {
  return <Text style={styles.price}>{localizedPrice}</Text>;
}
const styles = StyleSheet.create({
  price: {
    fontWeight: 'bold',
    color: defaultTokens.colorTextLinkPrimary,
    fontSize: parseFloat(defaultTokens.fontSizeTextLarge),
  },
});
