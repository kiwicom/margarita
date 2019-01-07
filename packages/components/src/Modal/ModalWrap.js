// @flow

import * as React from 'react';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { Props } from './Modal';
import ModalContent from './ModalContent';

const ModalWrap = ({ visible, children, onClose }: Props) => {
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
  zIndex: defaultTokens.zIndexModal,
  top: 0,
  width: '100%',
  height: '100%',
};

export default ModalWrap;
