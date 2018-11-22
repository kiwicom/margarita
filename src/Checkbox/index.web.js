// @flow

/* eslint jsx-a11y/label-has-associated-control: 0 jsx-a11y/label-has-for:0 */

import * as React from 'react';
import CheckboxShared from './CheckboxShared';
import theme from './styles';

type Props = {|
  +label?: React.Node,
  +value?: string,
  +hasError?: boolean,
  +disabled?: boolean,
  +checked?: boolean,
  +name?: string,
  +info?: React.Node,
  +onChange?: (
    ev: SyntheticInputEvent<HTMLInputElement>
  ) => void | Promise<any>,
|};

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
}: Props) {
  const labelStyle = {
    display: 'flex',
    flexDirection: 'row',
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? theme.orbit.opacityCheckboxDisabled : 1,
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
