// @flow

import * as React from 'react';
import { Text as RNText } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { StyleSheet } from '../PlatformStyleSheet';
import iconsMap from './icons.json';
import type { Props } from './IconTypes';

const getIconCharacter = name => {
  const icon = iconsMap[name];
  if (!icon) {
    throw Error(`Icon with name "${name}" does not exist.`);
  }

  if (/^E(.{3})$/.test(iconsMap[name].character)) {
    return String.fromCharCode(parseInt(iconsMap[name].character, 16));
  }
  return iconsMap[name].character;
};

export default function Icon({
  name,
  color = '#46515e',
  size = 'medium',
  style,
}: Props) {
  return (
    <RNText style={[styles.icon, styles[size], { color }, style]}>
      {getIconCharacter(name)}
    </RNText>
  );
}

const getSizeStyle = (size: number): Object => ({
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
