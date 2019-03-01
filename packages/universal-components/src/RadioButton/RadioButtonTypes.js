// @flow

import * as React from 'react';

import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';

type BulletType = 'bullet' | 'check';
type BulletPositionType = 'left' | 'right';

export type Props = {|
  +type?: BulletType,
  +bulletPosition?: BulletPositionType,
  +checked?: boolean,
  +disabled?: boolean,
  +children?: React.Node,
  +label?: React.Node,
  +onPress: () => void,
  +style?: StylePropType,
|};
