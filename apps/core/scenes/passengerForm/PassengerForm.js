// @flow

import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { StyleSheet, Text } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

export default function PassengerForm() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>TODO: Passenger form</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultTokens.backgroundBody,
  },
});
