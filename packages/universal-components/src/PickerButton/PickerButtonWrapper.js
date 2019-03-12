// @flow

import * as React from 'react';

import { Touchable } from '../Touchable';

export type Props = {|
  +onPress?: () => void,
  +children: React.Node,
|};

export default function PickerButtonWrapper(props: Props) {
  if (props.onPress) {
    return <Touchable onPress={props.onPress}>{props.children}</Touchable>;
  }
  return props.children;
}
