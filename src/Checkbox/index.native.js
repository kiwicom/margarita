// @flow

import * as React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import CheckboxShared from './CheckboxShared';
import StyleSheet from '../PlatformStyleSheet';
import theme, { parseStringToFloat } from './styles';

type Props = {|
  +label?: React.Node,
  +value?: string, // eslint-disable-line react/no-unused-prop-types
  +hasError?: boolean,
  +disabled?: boolean,
  +checked?: boolean,
  +name?: string, // eslint-disable-line react/no-unused-prop-types
  +info?: React.Node,
  +onChange?: (
    ev: SyntheticInputEvent<HTMLInputElement>
  ) => void | Promise<any>,
|};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
  },
  viewDisabled: {
    opacity: parseStringToFloat(theme.orbit.opacityCheckboxDisabled),
  },
});

export default function Checkbox({
  label,
  hasError,
  disabled,
  checked,
  info,
  onChange,
}: Props) {
  return (
    <TouchableWithoutFeedback onPress={onChange} disabled={disabled}>
      <View style={[styles.view, disabled && styles.viewDisabled]}>
        <CheckboxShared
          label={label}
          hasError={hasError}
          disabled={disabled}
          checked={checked}
          info={info}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
