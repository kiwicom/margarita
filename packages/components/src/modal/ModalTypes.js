// @flow

export type ModalProps = {|
  +visible: boolean,
  +onClose: () => void,
  +children: React.Element<any>,
|};

export type ModalContentProps = {|
  +onClose: () => void,
  +children: React.Element<any>,
|};
