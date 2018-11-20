// @flow

import * as React from 'react';
import { Text } from 'react-native'; // TODO replace with our own text
import StyleSheet from '../PlatformStyleSheet';

import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';
import type { ButtonType } from './ButtonTypes';
import { textColor } from './styles';

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
