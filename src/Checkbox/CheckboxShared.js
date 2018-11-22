// @flow

import * as React from 'react';
import CheckboxText from './CheckboxText';
import CheckboxIcon from './CheckboxIcon';

type Props = {|
  +label?: React.Node,
  +hasError?: boolean,
  +disabled?: boolean,
  +checked?: boolean,
  +info?: React.Node,
|};

export default function CheckboxShared({
  label,
  hasError,
  disabled,
  checked,
  info,
}: Props) {
  return (
    <>
      <CheckboxIcon checked={checked} hasError={hasError} disabled={disabled} />
      <CheckboxText label={label} checked={checked} info={info} />
    </>
  );
}
