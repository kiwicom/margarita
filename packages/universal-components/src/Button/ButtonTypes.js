// @flow

import * as React from 'react';

import { Icon } from '../Icon';
import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'critical'
  | 'facebook'
  | 'google';

export type ButtonSize = 'small' | 'normal' | 'large';

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
  +circled?: boolean,
  +size?: ButtonSize,
  +style?: StylePropType,
  +isLoading?: boolean,
|};
