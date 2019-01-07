// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import ModalWrap from './ModalWrap';

export type Props = {|
  +visible: boolean,
  +onClose: () => void,
  +children: ?React.Element<any>,
|};

const Modal = (props: Props) => {
  return (
    <>
      <View style={[styles.overlay, !props.visible && styles.overlayHidden]} />
      <ModalWrap {...props} />
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: defaultTokens.paletteInkDark,
    opacity: 0.2,
  },
  overlayHidden: {
    display: 'none',
  },
});

export default Modal;
