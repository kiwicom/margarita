// @flow

import * as React from 'react';
import { FlightServices } from '@kiwicom/margarita-core';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { MMB_BACKGROUND_COLOR } from '@kiwicom/margarita-config';

export default function FlightServicesScreen() {
  return (
    <View style={styles.container}>
      <FlightServices />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MMB_BACKGROUND_COLOR,
  },
});
