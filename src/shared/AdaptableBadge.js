// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Text } from '../Text';
import { StyleSheet } from '../PlatformStyleSheet';
import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';

type Props = {|
  +text: React.Node | string,
  +style?: StylePropType,
  +textStyle?: StylePropType,
  +icon?: React.Node,
|};

export default function AdaptableBadge({
  style,
  icon,
  textStyle,
  text,
}: Props) {
  return (
    <View style={[styles.container, style]}>
      {icon}
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    borderRadius: parseFloat(defaultTokens.borderRadiusSmall),
    paddingVertical: 2,
    paddingHorizontal: 5,
    backgroundColor: defaultTokens.paletteInkLight,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    color: defaultTokens.paletteWhite,
  },
});
