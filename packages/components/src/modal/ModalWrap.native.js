// @flow

import * as React from 'react';
import { Modal as RNModal } from 'react-native';

import type { ModalProps } from './ModalTypes';
import ModalContent from './ModalContent';

const ModalWrap = ({ visible, children, onClose }: ModalProps) => {
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
