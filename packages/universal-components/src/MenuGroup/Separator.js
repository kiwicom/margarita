// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { StyleSheet, type StylePropType } from '../PlatformStyleSheet';

type Props = {|
  +style?: StylePropType,
|};

export default function Separator({ style }: Props) {
  return <View style={[styles.separator, style]} />;
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: defaultTokens.paletteInkLighter,
    height: StyleSheet.hairlineWidth,
  },
});
