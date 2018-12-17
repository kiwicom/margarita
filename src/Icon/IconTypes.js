// @flow

import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';

type Size = 'small' | 'medium' | 'large';

export type Props = {|
  +name: IconNameType,
  size?: Size,
  color?: string,
  style?: StylePropType,
|};
