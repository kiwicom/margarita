// @flow

import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { StyleSheet } from '../PlatformStyleSheet';

export default function Marker() {
  return (
    <TouchableHighlight>
      <View style={styles.marker}>
        <View style={styles.dot} />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  marker: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 28,
    width: 28,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: defaultTokens.paletteCloudLightActive,
    backgroundColor: defaultTokens.paletteWhite,
    shadowColor: defaultTokens.paletteInkDark,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 0.2,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: defaultTokens.paletteBlueNormal,
  },
});
