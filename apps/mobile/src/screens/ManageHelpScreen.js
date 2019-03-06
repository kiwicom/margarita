// @flow

import * as React from 'react';
import { ManageHelp } from '@kiwicom/margarita-core';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

export default function ManageHelpScreen() {
  return (
    <View style={styles.container}>
      <ManageHelp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultTokens.backgroundBody,
  },
});
