// @flow

export type Props = {|
  +isVisible: boolean,
  +mode?: 'date' | 'time' | 'datetime',
  +datePickerMode?: 'calendar' | 'spinner' | 'default', // this prop is supported only on android
  +date?: Date,
  +minDate?: Date,
  +maxDate?: Date,
  +onConfirm: Date => void,
  +onDismiss: () => void,
|};
