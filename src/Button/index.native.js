// @flow

import * as React from 'react';
import { Icon } from '../Icon';

import GenericButtonWrapper from './GenericButtonWrapper';
import type { ButtonType } from './ButtonTypes';

import ButtonInner from './ButtonInner';

type Props = {|
  +children: React.Node,
  +width?: number,
  +onPress: () => void,
  +disabled?: boolean,
  +type?: ButtonType,
  +leftIcon?: React.Element<typeof Icon> | null,
  +rightIcon?: React.Element<typeof Icon> | null,
  +testID?: string,
  +sublabel?: React.Node,
  +href?: string,
  +block?: boolean,
|};

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
}: Props) {
  const buttonInnerProps = {
    disabled,
    type: originalType,
    testID,
    children,
    leftIcon,
    rightIcon,
    sublabel,
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
