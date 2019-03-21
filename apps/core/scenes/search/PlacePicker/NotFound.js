// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Text } from '@kiwicom/margarita-components';
import { StyleSheet } from '@kiwicom/universal-components';

export default function NotFound() {
  return (
    <View style={styles.container}>
      <Text type="secondary" size="large">
        We couldn't find what you were looking for
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
