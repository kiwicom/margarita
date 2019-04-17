// @flow

import * as React from 'react';
import { Text as RNText } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Text } from '../Text';
import {
  StyleSheet,
  type PlatformStyleObjectType,
} from '../PlatformStyleSheet';
import iconsMap from './icons.json';
import type { Props } from './IconTypes';

const sanitizeIconCharacter = (iconCharacter: string) => {
  if (/^E(?:.{3})$/.test(iconCharacter)) {
    return String.fromCharCode(parseInt(iconCharacter, 16));
  }
  return iconCharacter;
};

export default function Icon({
  name,
  color = '#46515e',
  size = 'medium',
  style,
}: Props) {
  if (name == null) {
    return <Text style={[styles[size], { color }, style]}>?</Text>;
  }

  const icon = iconsMap[name];
  if (!icon) {
    return <Text style={[styles[size], { color }, style]}>?</Text>;
  }

  return (
    <RNText style={[styles.icon, styles[size], { color }, style]}>
      {sanitizeIconCharacter(icon.character)}
    </RNText>
  );
}

const getSizeStyle = (size: number): $Values<PlatformStyleObjectType> => ({
  fontSize: size,
  width: size,
  height: size,
  lineHeight: size,
});

const styles = StyleSheet.create({
  icon: {
    fontFamily: 'orbit-icons',
    android: {
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
  },
  /* eslint-disable react-native/no-unused-styles */
  small: getSizeStyle(parseFloat(defaultTokens.widthIconSmall)),
  medium: getSizeStyle(parseFloat(defaultTokens.widthIconMedium)),
  large: getSizeStyle(parseFloat(defaultTokens.widthIconLarge)),
  /* eslint-enable */
});
