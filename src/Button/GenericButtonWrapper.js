// @flow

import * as React from 'react';

import Touchable from './Touchable';
import StyleSheet from '../PlatformStyleSheet';
import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';
import type { ButtonType } from './ButtonTypes';
import { wrapperColor } from './styles';

type Props = {|
  +children: React.Node,
  +onPress: () => void,
  +style?: StylePropType,
  +disabled?: boolean,
  +type: ButtonType,
  +testID?: string,
|};

/**
 * This is base component for generic button. You can pass anything to the
 * children so you should almost never use this component directly. There
 * are specialized components like 'TextButton' or 'LinkButton' for this.
 */
export default function Button({
  onPress,
  disabled = false,
  type = 'primary',
  style,
  testID,
  children,
}: Props) {
  const onPressHandler = onPress || (() => {});

  return (
    <Touchable
      disabled={!onPress || disabled}
      onPress={onPressHandler}
      style={[styleSheet.buttonWrapper, theme(type).wrapper, style]}
      accessibilityComponentType="button"
      accessibilityTraits="button"
      testID={testID}
    >
      {children}
    </Touchable>
  );
}

const styleSheet = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 11,
    height: 44,
    borderRadius: 6,
  },
});

const theme = (type: ButtonType = 'primary') =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: wrapperColor[type],
    },
  });
