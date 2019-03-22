// @flow

export type Props = {|
  +isVisible: boolean,
  +date?: Date,
  +onConfirm: Date => void,
  +onDismiss: () => void,
|};
