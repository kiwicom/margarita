// @flow

import * as React from 'react';
import { MapView } from '@kiwicom/margarita-map';
import { StyleSheet } from '@kiwicom/universal-components';

// TODO: Replace hardcoded values with location coordinates
const SegmentMap = () => (
  <MapView
    style={styles.mapView}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
);

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
    height: 200,
  },
});

export default SegmentMap;
