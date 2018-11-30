// @flow

import * as React from 'react';
import CheckboxShared from './CheckboxShared';
import type { CheckboxProps } from './CheckboxTypes';

export default function Checkbox({
  label,
  hasError,
  disabled,
  checked,
  info,
  onChange,
}: CheckboxProps) {
  return (
    <CheckboxShared
      label={label}
      hasError={hasError}
      disabled={disabled}
      checked={checked}
      info={info}
      onPress={onChange}
    />
  );
}
