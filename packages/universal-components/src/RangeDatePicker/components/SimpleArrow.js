// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { StyleSheet, type StylePropType } from '../../PlatformStyleSheet';

export type Props = {|
  +style?: StylePropType,
  +direction?: 'left' | 'right',
|};

export const SimpleArrow = ({ direction, style }: Props) => (
  <View
    style={[
      styles.arrow,
      direction === 'left' ? styles.arrowLeft : styles.arrowRight,
      style,
    ]}
  />
);
const arrowSize = 4;
const styles = StyleSheet.create({
  arrow: {
    width: 0,
    height: 0,
    borderWidth: arrowSize,
    borderColor: 'transparent',
  },
  arrowLeft: {
    borderEndColor: defaultTokens.backgroundBody,
  },
  arrowRight: {
    borderStartColor: defaultTokens.backgroundBody,
  },
});
