// @flow

import * as React from 'react';

import { StyleSheet } from '../PlatformStyleSheet';
import { Text } from '../Text';
import { textColor } from './styles';
import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';
import type { ButtonType, ButtonSize } from './ButtonTypes';
import { size as buttonSizeStyle } from './styles/shared';

type Props = {|
  +text: React.Node,
  +type: ButtonType,
  +style?: StylePropType,
  +variant?: 'default' | 'sublabel',
  +size?: ButtonSize,
|};

export default function ButtonTitle({
  text,
  style,
  type = 'primary',
  variant = 'default',
  size = 'normal',
}: Props) {
  const variantStyle =
    variant === 'sublabel'
      ? styles.sublabel
      : [styles.default, sizeTheme(size).buttonSizeWrapper];
  return (
    <Text style={[styles.common, variantStyle, colorTheme(type).text, style]}>
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
    lineHeight: 21,
  },
  sublabel: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 'normal',
  },
});

const colorTheme = (type: ButtonType = 'primary') =>
  StyleSheet.create({
    text: {
      color: textColor[type],
    },
  });

const sizeTheme = (size: ButtonSize = 'normal') =>
  StyleSheet.create({
    // eslint-disable-next-line react-native/no-unused-styles
    buttonSizeWrapper: {
      fontSize: buttonSizeStyle[size].fontSize,
    },
  });
