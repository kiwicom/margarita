// @flow

import * as React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { StyleSheet } from '../PlatformStyleSheet';
import type { Props } from './ModalTypes';

const Modal = ({
  children,
  isVisible,
  style,
  backdropColor,
  backdropOpacity,
  onBackdropPress,
}: Props) => {
  if (!isVisible) {
    return null;
  }

  const dynamicStyle = StyleSheet.create({
    backdrop: {
      opacity: backdropOpacity ?? 0.5,
      backgroundColor: backdropColor ?? defaultTokens.paletteInkDark,
    },
  });

  return (
    <View style={[styles.overlay, style]}>
      <TouchableWithoutFeedback onPress={onBackdropPress} testID="backdrop">
        <View style={[styles.backdrop, dynamicStyle.backdrop]} />
      </TouchableWithoutFeedback>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    web: {
      position: 'fixed',
      overflowY: 'auto',
    },
    width: '100%',
    height: '100%',
    top: 0,
    start: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: parseInt(defaultTokens.zIndexModal, 10),
  },
  backdrop: {
    web: {
      position: 'fixed',
    },
    height: '100%',
    width: '100%',
  },
});
export default Modal;
