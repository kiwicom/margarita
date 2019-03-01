// @flow

import * as React from 'react';

import type { Props as ButtonProps } from './ButtonTypes';
import { wrapperStyle, disabledStyle, displayBlock } from './styles/index.web';
import ButtonInner from './ButtonInner';

type Props = {|
  ...ButtonProps,
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
  label,
  circled,
}: Props) {
  const buttonInnerProps = {
    disabled,
    type: originalType,
    testID,
    children,
    leftIcon,
    rightIcon,
    label,
    circled,
  };

  if (href) {
    return (
      <a
        href={href}
        data-test-id={testID}
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
      data-test-id={testID}
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
