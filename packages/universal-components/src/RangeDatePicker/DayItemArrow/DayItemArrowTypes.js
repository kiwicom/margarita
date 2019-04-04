// @flow

import { type StylePropType, StyleSheet } from '../../PlatformStyleSheet';

export type Props = {|
  +style?: StylePropType,
  +onPress?: () => void,
  +direction?: 'left' | 'right',
|};
