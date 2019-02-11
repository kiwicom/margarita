// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { Text } from '@kiwicom/margarita-components';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text weight="bold" type="secondary" size="small" style={styles.text}>
        All Services
      </Text>
      <Text size="small" style={styles.text} type="primary">
        2x Travel Plus Insurance
      </Text>
      <Text size="small" style={styles.text} type="primary">
        Airport Transfer
      </Text>
      <Text size="small" style={styles.text} type="primary">
        Flight food
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginStart: 48,
    paddingVertical: 6,
  },
  text: {
    marginVertical: 6,
  },
});
