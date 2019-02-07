// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +value: string,
  +label: string,
  +style: string,
|};

export default function PassengerCardDetail({
  value,
  label,
  style = 'normal',
}: Props) {
  return (
    <View style={style === 'normal' ? styles.rowWrapper : styles.idRowWrapper}>
      <Text type="secondary" style={styles.textPadding}>
        {label}
      </Text>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rowWrapper: {
    flexGrow: 1,
    width: 120,
  },
  idRowWrapper: {
    flexGrow: 1,
  },
  textPadding: {
    paddingBottom: parseInt(defaultTokens.spaceXSmall, 10),
  },
});
