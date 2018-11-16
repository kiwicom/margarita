// @flow

import * as React from 'react';
import { Text } from 'react-native'; // TODO replace with our own text
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import StyleSheet from '../PlatformStyleSheet';

import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';
import type { ButtonType } from './ButtonTypes';

type Props = {|
  +text: React.Node,
  +type: ButtonType,
  +style?: StylePropType,
  +variant?: 'default' | 'sublabel',
|};

export default function ButtonTitle({
  text,
  style,
  type = 'primary',
  variant = 'default',
}: Props) {
  const variantStyle =
    variant === 'sublabel' ? styles.sublabel : styles.default;
  return (
    <Text style={[styles.common, variantStyle, theme[type].text, style]}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  common: {
    android: {
      textTransform: 'uppercase',
    },
  },
  default: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 21,
  },
  sublabel: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 'normal',
  },
});

const theme = {
  primary: StyleSheet.create({
    text: {
      color: defaultTokens.colorTextButtonPrimary,
    },
  }),
  secondary: StyleSheet.create({
    text: {
      color: defaultTokens.colorTextButtonSecondary,
    },
  }),
  info: StyleSheet.create({
    text: {
      color: defaultTokens.paletteBlueNormal,
      web: {
        color: defaultTokens.colorTextButtonInfo,
      },
    },
  }),
  success: StyleSheet.create({
    text: {
      color: defaultTokens.paletteProductNormal,
      web: {
        color: defaultTokens.colorTextButtonSuccess,
      },
    },
  }),
  warning: StyleSheet.create({
    text: {
      color: defaultTokens.colorTextButtonWarning,
    },
  }),
  critical: StyleSheet.create({
    text: {
      color: defaultTokens.colorTextButtonCritical,
    },
  }),
  facebook: StyleSheet.create({
    text: {
      color: defaultTokens.colorTextButtonFacebook,
    },
  }),
  google: StyleSheet.create({
    text: {
      color: defaultTokens.colorTextButtonGoogle,
    },
  }),
  disabled: StyleSheet.create({
    text: {
      color: defaultTokens.paletteInkLighter,
    },
  }),
};
