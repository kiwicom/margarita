// @flow

import * as React from 'react';
import { Modal as RNModal } from 'react-native';

import type { Props } from './Modal';
import ModalContent from './ModalContent';

const ModalWrap = ({ visible, children, onClose }: Props) => {
  return (
    <RNModal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <ModalContent onClose={onClose}>{children}</ModalContent>
    </RNModal>
  );
};

export default ModalWrap;
