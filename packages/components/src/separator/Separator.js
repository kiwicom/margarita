// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, type StylePropType } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +style?: StylePropType,
|};

export default function Separator(props: Props) {
  return <View style={[styles.separator, props.style]} />;
}

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: defaultTokens.paletteInkLighter,
  },
});
