// @flow

import * as React from 'react';

export type ModalProps = {|
  +visible: boolean,
  +onClose: () => void,
  +children: React.Element<any>,
|};

export type ModalContentProps = {|
  +onClose: () => void,
  +children: React.Element<any>,
|};
