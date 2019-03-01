// @flow

import * as React from 'react';
import ReactModal from 'react-native-modal';

import type { Props } from './ModalTypes';

/**
 * NOTE: This is just a `react-native-modal` wrapper with default settings
 * so it's going to be easy to replace in the future (if necessary).
 */
function Modal(props: Props) {
  return (
    <ReactModal
      supportedOrientations={['portrait', 'landscape']} // iOS only
      animationInTiming={150}
      animationOutTiming={150}
      useNativeDriver
      hideModalContentWhileAnimating // this is workaround for `useNativeDriver` property (see: https://github.com/react-native-community/react-native-modal#the-modal-flashes-in-a-weird-way-when-animating)
      {...props}
    />
  );
}

Modal.defaultProps = {
  backdropOpacity: 0.5,
};

export default Modal;
