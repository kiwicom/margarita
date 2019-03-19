// @flow

import * as React from 'react';

import { type StylePropType } from '../PlatformStyleSheet';

export type Props = {|
  +autoCorrect?: boolean,
  +autoFocus?: boolean,
  +size?: 'small' | 'normal',
  +placeholder?: string,
  +value?: ?string,
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
<<<<<<< HEAD
  +labelContainerStyle?: StylePropType,
  +style?: StylePropType,
  +labelTextStyle?: StylePropType,
=======
  +containerStyle?: StylePropType,
  +labelStyle?: StylePropType,
>>>>>>> Change names from labelContainer and labelText to container and text
|};

export type State = {|
  focused: boolean,
  value: string,
|};
