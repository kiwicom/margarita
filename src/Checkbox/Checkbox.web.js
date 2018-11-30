// @flow

/* eslint jsx-a11y/label-has-associated-control: 0 jsx-a11y/label-has-for:0 */

import * as React from 'react';
import CheckboxShared from './CheckboxShared';
import type { CheckboxProps } from './CheckboxTypes';

const styleInput = {
  display: 'none',
  visibility: 'hidden',
};

export default function Checkbox({
  label,
  value,
  hasError,
  disabled,
  checked,
  name,
  info,
  onChange,
}: CheckboxProps) {
  const labelStyle = {
    display: 'flex',
    flexDirection: 'row',
    cursor: disabled ? 'default' : 'pointer',
  };

  return (
    <label style={labelStyle}>
      <input
        value={value}
        type="checkbox"
        disabled={disabled}
        name={name}
        checked={checked}
        onChange={onChange}
        style={styleInput}
      />
      <CheckboxShared
        label={label}
        hasError={hasError}
        disabled={disabled}
        checked={checked}
        info={info}
      />
    </label>
  );
}
