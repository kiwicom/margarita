// @flow

import * as React from 'react';

import { Icon } from '../Icon';

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'critical'
  | 'facebook'
  | 'google'
  | 'disabled';

export type Props = {|
  +onPress: () => void,
  +children?: React.Node,
  +width?: number,
  +disabled?: boolean,
  +type?: ButtonType,
  +leftIcon?: React.Element<typeof Icon> | null,
  +rightIcon?: React.Element<typeof Icon> | null,
  +testID?: string,
  +sublabel?: React.Node,
  +href?: string,
  +block?: boolean,
  +label?: React.Node,
|};
