// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Icon } from '../Icon';
import StyleSheet from '../PlatformStyleSheet';
import theme, { parsePxValue } from './styles';
import type { CheckboxIconProps } from './CheckboxTypes';

export default function CheckboxIcon({
  checked,
  hasError,
  disabled,
  focused,
  hovered,
  pressed,
}: CheckboxIconProps) {
  const errorState = hasError && !disabled && !checked;
  const iconColor = disabled
    ? theme.orbit.colorIconCheckboxRadioDisabled
    : theme.orbit.colorIconCheckboxRadio;
  return (
    <View
      style={[
        styles.box,
        errorState && styles.boxError,
        focused && styles.boxFocused,
        hovered && !disabled && styles.boxHover,
        pressed && styles.boxPressed,
      ]}
    >
      {checked && <Icon name="check" color={iconColor} size={14} />}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    backgroundColor: theme.orbit.backgroundInput,
    borderRadius: parsePxValue(theme.orbit.borderRadiusNormal),
    width: parsePxValue(theme.orbit.widthCheckbox),
    height: parsePxValue(theme.orbit.heightCheckbox),
    borderWidth: 1,
    borderColor: theme.orbit.borderColorCheckboxRadio,
    web: {
      transitionDuration: theme.orbit.durationFast,
      transitionProperty: 'all',
      transitionTimingFunction: 'ease-in-out',
    },
  },
  boxHover: {
    borderWidth: 1,
    borderColor: theme.orbit.borderColorCheckboxRadioHover,
  },
  boxFocused: {
    borderWidth: 2,
    borderColor: theme.orbit.borderColorCheckboxRadioFocus,
  },
  boxPressed: {
    transform: [
      { scaleX: theme.orbit.modifierScaleCheckboxRadioActive },
      { scaleY: theme.orbit.modifierScaleCheckboxRadioActive },
    ],
    borderWidth: 1,
    borderColor: theme.orbit.borderColorCheckboxRadioActive,
  },
  boxError: {
    borderColor: theme.orbit.borderColorCheckboxRadioError,
  },
});
