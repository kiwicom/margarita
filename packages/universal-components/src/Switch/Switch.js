// @flow strict

import * as React from 'react';
import { View, Switch as RNSwitch } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { StyleSheet } from '../PlatformStyleSheet';
import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';

type Props = {||};

export default function Switch() {
  return (
    <View style={styles.row}>
      <RNSwitch onValueChange={() => {}} value={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
