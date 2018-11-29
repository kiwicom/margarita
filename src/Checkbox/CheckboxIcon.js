// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Icon } from '../Icon';
import StyleSheet from '../PlatformStyleSheet';
import theme, { parsePxValue } from './styles';

type Props = {|
  +checked?: boolean,
  +hasError?: boolean,
  +disabled?: boolean,
|};

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.orbit.borderColorCheckboxRadio,
    backgroundColor: theme.orbit.backgroundInput,
    borderRadius: parsePxValue(theme.orbit.borderRadiusNormal),
    width: parsePxValue(theme.orbit.widthCheckbox),
    height: parsePxValue(theme.orbit.heightCheckbox),
  },
  boxError: {
    borderColor: theme.orbit.borderColorCheckboxRadioError,
  },
});

export default function CheckboxIcon({ checked, hasError, disabled }: Props) {
  const errorState = hasError && !disabled && !checked;
  const iconColor = disabled
    ? theme.orbit.colorIconCheckboxRadioDisabled
    : theme.orbit.colorIconCheckboxRadio;
  return (
    <View style={[styles.box, errorState && styles.boxError]}>
      {checked && <Icon name="check" color={iconColor} size={14} />}
    </View>
  );
}
