// @flow strict

import * as React from 'react';
import { TouchableWithoutFeedback as OriginalTouchableWithoutFeedback } from 'react-native'; // eslint-disable-line no-restricted-imports

type Props = {|
  +onPress: () => void,
  +children: React.Node | React.ChildrenArray<React.Node>,
  +accessibilityTraits: string,
  +accessibilityComponentType: string,
  // Expand as needed
|};

export default function TouchableWithoutFeedback(props: Props) {
  return <OriginalTouchableWithoutFeedback {...props} />;
}

TouchableWithoutFeedback.defaultProps = {
  accessibilityTraits: 'button',
  accessibilityComponentType: 'button',
};
