// @flow

import * as React from 'react';
import { ShareBooking } from '@kiwicom/margarita-core';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { MMB_BACKGROUND_COLOR } from '@kiwicom/margarita-config';

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
    backgroundColor: MMB_BACKGROUND_COLOR,
  },
});
