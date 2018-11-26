// @flow

import * as React from 'react';

export type Props = {|
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
|};

export type State = {|
  focused: boolean,
|};
