// @flow

import * as React from 'react';
import { type StylePropType } from '../PlatformStyleSheet/StyleTypes';

export type TextType = {|
  +align?: 'left' | 'right' | 'center' | 'justify',
  +children: React.Node,
  +dataTest?: string,
  +weight?: 'normal' | 'bold',
  +italic?: boolean,
  +size?: 'normal' | 'large' | 'small',
  +uppercase?: boolean,
  +style?: StylePropType,
  +type?:
    | 'attention'
    | 'critical'
    | 'info'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'white',
|};
