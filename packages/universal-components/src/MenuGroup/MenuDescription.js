// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { StyleSheet } from '../PlatformStyleSheet';
import { Text } from '../Text';

type Props = {|
  +text?: string,
  +children?: React.Node,
|};

export default function MenuDescription({ text, children }: Props) {
  return (
    <View style={styles.container}>
      {text ? <Text style={styles.text}>{text}</Text> : children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: parseFloat(defaultTokens.spaceMedium),
    marginVertical: parseFloat(defaultTokens.spaceLarge),
  },
  text: {
    color: defaultTokens.paletteInkLight,
    fontSize: parseFloat(defaultTokens.fontSizeButtonSmall),
  },
});
