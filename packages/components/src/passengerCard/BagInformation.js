// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text, Icon } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +count: number,
  +type: string,
|};

export default function BagInformation({ type, count }: Props) {
  return (
    <View style={styles.textWrapper}>
      <Text>{count} x </Text>
      <Icon size="small" name="baggage-checked" />
      <Text>{type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textWrapper: {
    flexDirection: 'row',
    paddingBottom: parseInt(defaultTokens.spaceXXXSmall, 10),
  },
});
