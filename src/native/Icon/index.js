// @flow

import * as React from 'react';
// eslint-disable-next-line no-restricted-imports
import { Text as RNText, StyleSheet } from 'react-native';

import iconsMap from './icons.json';

export type Props = {|
  +name: string,
  +size?: number,
  +color?: string,
|};

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

const Icon = ({ name, color, size }: Props) => (
  <RNText
    color={color}
    size={size}
    style={[styles.icon, { color, fontSize: size }]}
  >
    {getIconCharacter(name)}
  </RNText>
);

Icon.defaultProps = {
  color: '#46515e',
  size: 20,
};

const styles = StyleSheet.create({
  icon: {
    fontFamily: 'orbit-icons',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});

export default Icon;
