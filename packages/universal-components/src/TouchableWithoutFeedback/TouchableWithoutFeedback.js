// @flow strict

import * as React from 'react';
import { TouchableWithoutFeedback as OriginalTouchableWithoutFeedback } from 'react-native';
import type { StylePropType } from '@kiwicom/universal-components';

type Props = {|
  +onPress: () => void | Promise<void>,
  +disabled?: boolean,
  +children: React.Node,
  +accessibilityTraits: string,
  +accessibilityComponentType: string,
  +style?: StylePropType,
  +hitSlop?: {
    left: number,
    right: number,
    top: number,
    bottom: number,
  },
  +onMouseEnter?: () => void,
  +onMouseLeave?: () => void,
|};

export default function TouchableWithoutFeedback(props: Props) {
  return <OriginalTouchableWithoutFeedback {...props} />;
}

TouchableWithoutFeedback.defaultProps = {
  accessibilityTraits: 'button',
  accessibilityComponentType: 'button',
};
