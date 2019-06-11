// @flow

import * as React from 'react';

import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';

/**
 * NOTE:
 * `onRequestClose` function will be invoked when the user taps
 * the hardware back button on Android or the menu button on Apple TV.
 * It should be used to close modal window.
 */

export type Props = {|
  +children: React.Node,
  +isVisible: boolean,
  +style?: StylePropType,
  +onRequestClose?: () => void,
  +backdropColor?: string,
  +backdropOpacity?: number,
  +onBackdropPress?: () => void,
  +coverScreen?: boolean,
|};
