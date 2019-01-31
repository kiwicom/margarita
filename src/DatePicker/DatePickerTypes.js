// @flow

import * as React from 'react';

export type Props = {|
  +isVisible: boolean,
  +mode?: 'date' | 'time' | 'datetime',
  +datePickerMode?: 'calendar' | 'spinner' | 'default', // this prop is supported only on android
  +date?: Date,
  +minDate?: Date,
  +maxDate?: Date,
  +onConfirm: Date => void,
  +onDismiss: () => void,
  +labels: {|
    +cancel: React.Node, // this prop is supported only on web & iOS
    +confirm: React.Node, // this prop is supported only on iOS
  |},
|};
