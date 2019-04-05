// @flow

import * as React from 'react';

import { Touchable } from '../Touchable';
import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';

type Props = {|
  +children: React.Node,
  +width?: number,
  +onPress: () => void,
  +style?: StylePropType,
  +disabled?: boolean,
  +testID?: string,
  +isLoading?: boolean,
|};

/**
 * This is base component for generic button. You can pass anything to the
 * children so you should almost never use this component directly. There
 * are specialized components like 'TextButton' or 'LinkButton' for this.
 */
export default function Button({
  onPress,
  width,
  disabled = false,
  style,
  testID,
  children,
}: Props) {
  const onPressHandler = onPress || (() => {});

  return (
    <Touchable
      disabled={!onPress || disabled}
      onPress={onPressHandler}
      style={style}
      accessibilityComponentType="button"
      accessibilityTraits="button"
      testID={testID}
      width={width}
    >
      {children}
    </Touchable>
  );
}
