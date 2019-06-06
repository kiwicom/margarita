// @flow

import * as React from 'react';

import { type StylePropType } from '../PlatformStyleSheet/StyleTypes';
import { type Theme } from '../ThemeProvider';

type AccessibilityStates =
  | 'selected'
  | 'disabled'
  | 'checked'
  | 'busy'
  | 'expanded';

export type TextType = {|
  align?: 'left' | 'right' | 'center' | 'justify',
  +children: ?React.Node,
  +dataTest?: string,
  +italic?: boolean,
  numberOfLines?: ?number,
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip',
  size?: 'normal' | 'large' | 'small',
  +style?: StylePropType,
  +uppercase?: boolean,
  +type?:
    | 'attention'
    | 'critical'
    | 'info'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'white',
  +weight?: 'normal' | 'bold',
  +expo?: boolean,
  +theme: Theme,
  accessible?: boolean,
  accessibilityLabel?: string,
  accessibilityRole?: 'button' | 'header' | 'link' | 'listitem' | 'none',
  accessibilityStates?: Array<AccessibilityStates>,
  ariaLevel?: number,
|};
