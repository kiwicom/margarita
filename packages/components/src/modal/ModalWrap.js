// @flow

import * as React from 'react';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { ModalProps } from './ModalTypes';
import ModalContent from './ModalContent';

const ModalWrap = ({ visible, children, onClose }: ModalProps) => {
  if (visible) {
    return (
      <div style={style}>
        <ModalContent onClose={onClose}>{children}</ModalContent>
      </div>
    );
  }
  return null;
};

const style = {
  position: 'absolute',
  zIndex: parseInt(defaultTokens.zIndexModal, 10),
  width: '100%',
  height: '100%',
  overflowY: 'auto',
};

export default ModalWrap;
