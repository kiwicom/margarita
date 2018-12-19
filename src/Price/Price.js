// @flow

import * as React from 'react';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import 'intl'; // Polyfill because of Android
import Text from '../Text';
import StyleSheet from '../PlatformStyleSheet';
import type { PriceProps } from './PriceTypes';

const formatPrice = (price, currency, locale) =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(price);
export default function Price({ value, currency, locale }: PriceProps) {
  return (
    <Text style={styles.price}>{formatPrice(value, currency, locale)}</Text>
  );
}
const styles = StyleSheet.create({
  price: {
    fontWeight: 'bold',
    color: defaultTokens.colorTextLinkPrimary,
    fontSize: parseFloat(defaultTokens.fontSizeTextLarge),
  },
});
