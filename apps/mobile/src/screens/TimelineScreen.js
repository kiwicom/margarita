// @flow

import * as React from 'react';
import { Timeline } from '@kiwicom/margarita-core';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

export default function TimelineScreen() {
  return (
    <View style={styles.container}>
      <Timeline />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultTokens.backgroundBody,
  },
});
