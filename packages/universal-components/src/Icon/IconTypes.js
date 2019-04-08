// @flow

import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';
import type { IconNameType } from '../types/_generated-types';

export type IconSize = 'small' | 'medium' | 'large';

export type Props = {|
  +name?: IconNameType,
  size?: IconSize,
  color?: string,
  style?: StylePropType,
|};
