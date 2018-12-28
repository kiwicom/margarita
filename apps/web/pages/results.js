// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Results } from '@kiwicom/margarita-core';
import { StyleSheet } from '@kiwicom/universal-components';

const results = () => {
  return (
    <View style={styles.container}>
      <Results />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default results;
