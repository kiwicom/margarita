// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Search } from '@kiwicom/margarita-core';
import { StyleSheet } from '@kiwicom/universal-components';

export default () => (
  <View style={styles.page}>
    <Search />
  </View>
);

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
