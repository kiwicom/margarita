// @flow

import * as React from 'react';

import GenericButtonWrapper from './GenericButtonWrapper';
import type { Props } from './ButtonTypes';

import ButtonInner from './ButtonInner';

export default function Button({
  onPress,
  disabled = false,
  type: originalType = 'primary',
  width,
  testID,
  children,
  leftIcon,
  rightIcon,
  sublabel,
  label,
}: Props) {
  const buttonInnerProps = {
    disabled,
    type: originalType,
    testID,
    children,
    leftIcon,
    rightIcon,
    sublabel,
    label,
  };

  return (
    <GenericButtonWrapper
      disabled={!onPress || disabled}
      onPress={onPress}
      testID={testID}
      width={width}
    >
      <ButtonInner {...buttonInnerProps} />
    </GenericButtonWrapper>
  );
}
