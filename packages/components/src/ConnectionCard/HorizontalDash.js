// @flow

import * as React from 'react';
import { View, Dimensions } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +size?: number,
  +borderColor?: string,
  +overlayColor?: string,
|};

export default function HorizontalDash({
  size = 2,
  borderColor = defaultTokens.borderColorCard,
  overlayColor = defaultTokens.backgroundCard,
}: Props) {
  const dashStyles = { borderWidth: size, borderColor: borderColor };
  const overlayStyles = {
    bottom: -size,
    left: -size,
    height: size,
    backgroundColor: overlayColor,
  };
  return (
    <View style={[styles.dash, dashStyles]}>
      <View style={[styles.dashOverlay, overlayStyles]} />
    </View>
  );
}

const styles = StyleSheet.create({
  dash: {
    width: '100%',
    height: 0,
    borderStyle: 'dotted',
    web: {
      borderBottomWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
    },
    position: 'relative',
  },
  dashOverlay: {
    width: Dimensions.get('window').width,
    position: 'absolute',
    web: {
      display: 'none',
    },
  },
});
