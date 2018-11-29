// @flow

import * as React from 'react';
import { Icon } from '../Icon';

import type { ButtonType } from './ButtonTypes';

import { wrapperStyle, disabledStyle, displayBlock } from './styles/index.web';
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
  href,
  block,
}: Props) {
  const buttonInnerProps = {
    disabled,
    type: originalType,
    testID,
    children,
    leftIcon,
    rightIcon,
  };

  if (href) {
    return (
      <a
        testID={testID}
        href={href}
        style={{
          ...wrapperStyle,
          ...displayBlock(block, width),
          ...disabledStyle(disabled),
        }}
      >
        <ButtonInner {...buttonInnerProps} />
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onPress}
      testID={testID}
      disabled={disabled}
      style={{
        ...wrapperStyle,
        ...displayBlock(block, width),
        ...disabledStyle(disabled),
      }}
    >
      <ButtonInner {...buttonInnerProps} />
    </button>
  );
}
