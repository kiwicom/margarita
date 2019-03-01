// @flow

import * as React from 'react';

import { StyleSheet } from '../PlatformStyleSheet';
import { Text } from '../Text';
import { textColor } from './styles';
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
    <Text style={[styles.common, variantStyle, theme(type).text, style]}>
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

const theme = (type: ButtonType = 'primary') =>
  StyleSheet.create({
    text: {
      color: textColor[type],
    },
  });
