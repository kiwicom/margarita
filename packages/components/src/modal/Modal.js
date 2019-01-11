// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { ModalProps } from './ModalTypes';
import ModalWrap from './ModalWrap';

const Modal = (props: ModalProps) => {
  return (
    <>
      {props.visible && <View style={styles.overlay} />}
      <ModalWrap {...props} />
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    zIndex: parseInt(defaultTokens.zIndexModal, 10),
    width: '100%',
    height: '100%',
    backgroundColor: defaultTokens.paletteInkDark,
    opacity: 0.2,
    android: {
      elevation: 4, // NOTE: added to move overlay above PlaceSwitch on search screen
    },
  },
});

export default Modal;
