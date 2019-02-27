// @flow

import * as React from 'react';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Text } from '../Text';
import { StyleSheet } from '../PlatformStyleSheet';
import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';

type LocalizedPriceProps = {|
  +localizedPrice: string,
  +style?: StylePropType,
|};

export default function LocalizedPrice({
  localizedPrice,
  style,
}: LocalizedPriceProps) {
  return <Text style={[styles.price, style]}>{localizedPrice}</Text>;
}
const styles = StyleSheet.create({
  price: {
    fontWeight: 'bold',
    color: defaultTokens.colorTextLinkPrimary,
    fontSize: parseFloat(defaultTokens.fontSizeTextLarge),
    web: {
      color: '#2e353b', // // @TODO repeating value - should be added to design-tokens
      fontSize: 18,
    },
  },
});
