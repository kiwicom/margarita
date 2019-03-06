// @flow

import * as React from 'react';
import { ShareBooking } from '@kiwicom/margarita-core';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

export default function ShareBookingScreen() {
  return (
    <View style={styles.container}>
      <ShareBooking />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultTokens.backgroundBody,
  },
});
