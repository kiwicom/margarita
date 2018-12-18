// @flow

import * as React from 'react';

export type Props = {|
  +isVisible: boolean, // this prop is supported only on mobile
  +mode?: 'date' | 'time' | 'datetime',
  +datePickerMode?: 'calendar' | 'spinner' | 'default', // this prop is supported only on android
  +date?: Date,
  +minDate?: Date,
  +maxDate?: Date,
  +onConfirm: Date => void,
  +onDismiss: () => void,
  +customInput?: React.Node, // this prop is supported only on web
|};
