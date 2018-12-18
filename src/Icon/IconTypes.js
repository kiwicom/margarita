// @flow

import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';
import type { IconNameType } from '../types/_generated-types';

type Size = 'small' | 'medium' | 'large';

export type Props = {|
  +name: IconNameType,
  size?: Size,
  color?: string,
  style?: StylePropType,
|};
