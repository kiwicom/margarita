// @flow

import * as React from 'react';
import { MapView } from '@kiwicom/margarita-map';
import { View } from 'react-native';
import { StyleSheet, Text } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +latitude: ?number,
  +longitude: ?number,
  +name: ?string,
|};

export default function SegmentMapMarker(props: Props) {
  if (props.latitude == null || props.longitude == null) {
    return null;
  }
  return (
    <MapView.Marker
      coordinate={{
        latitude: props.latitude,
        longitude: props.longitude,
      }}
    >
      <View style={styles.row}>
        <View style={styles.dot} />
        <Text size="small">{props.name}</Text>
      </View>
    </MapView.Marker>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    position: 'absolute',
    top: -9,
    start: -3,
    alignItems: 'center',
  },
  dot: {
    backgroundColor: defaultTokens.paletteInkDark,
    height: 6,
    width: 6,
    borderRadius: 3,
  },
});
