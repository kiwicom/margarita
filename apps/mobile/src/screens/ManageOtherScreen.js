// @flow

import * as React from 'react';
import { ManageOther } from '@kiwicom/margarita-core';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { MMB_BACKGROUND_COLOR } from '@kiwicom/margarita-config';

export default function ManageOtherScreen() {
  return (
    <View style={styles.container}>
      <ManageOther />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MMB_BACKGROUND_COLOR,
  },
});
