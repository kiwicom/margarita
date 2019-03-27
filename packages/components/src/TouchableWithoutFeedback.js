// @flow strict

import * as React from 'react';
import { TouchableWithoutFeedback as OriginalTouchableWithoutFeedback } from 'react-native'; // eslint-disable-line no-restricted-imports
import type { StylePropType } from '@kiwicom/universal-components';

type Props = {|
  +onPress: () => void,
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
