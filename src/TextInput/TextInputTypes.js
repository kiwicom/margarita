// @flow

import * as React from 'react';

export type Props = {|
  +autoFocus?: boolean,
  +size?: 'small' | 'normal',
  +placeholder?: string,
  +value?: string,
  +disabled?: boolean,
  +required?: boolean,
  +inlineLabel?: boolean,
  +label: React.Node,
  +prefix?: React.Node,
  +suffix?: React.Node,
  +type?: string,
  +maxLength?: number,
  +minLength?: number, // this prop is supported only on web
  +onFocus?: () => void | Promise<any>,
  +onBlur?: () => void | Promise<any>,
  +onChangeText?: string => void | Promise<any>,
  +error?: React.Node,
  +help?: React.Node,
  +status?: 'default' | 'success' | 'warning', // this prop is supported only on mobile
|};

export type State = {|
  focused: boolean,
  value: string,
|};
