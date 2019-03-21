// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Icon } from '../Icon';
import { StyleSheet } from '../PlatformStyleSheet';

type Props = {|
  +checked?: boolean,
  +hasError?: boolean,
  +disabled?: boolean,
  +focused?: boolean,
  +hovered?: boolean,
  +pressed?: boolean,
|};

export default function CheckboxIcon({
  checked,
  hasError,
  disabled,
  focused,
  hovered,
  pressed,
}: Props) {
  const errorState = hasError && !disabled && !checked;
  const iconColor = disabled
    ? defaultTokens.colorIconCheckboxRadioDisabled
    : defaultTokens.colorIconCheckboxRadio;
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
      {checked && <Icon name="check" color={iconColor} size="small" />}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    backgroundColor: defaultTokens.backgroundInput,
    borderRadius: parseInt(defaultTokens.borderRadiusNormal, 10),
    width: parseInt(defaultTokens.widthCheckbox, 10),
    height: parseInt(defaultTokens.heightCheckbox, 10),
    borderWidth: 1,
    borderColor: defaultTokens.borderColorCheckboxRadio,
    web: {
      transitionDuration: defaultTokens.durationFast,
      transitionProperty: 'all',
      transitionTimingFunction: 'ease-in-out',
    },
  },
  boxHover: {
    borderWidth: 1,
    borderColor: defaultTokens.borderColorCheckboxRadioHover,
  },
  boxFocused: {
    borderWidth: 2,
    borderColor: defaultTokens.borderColorCheckboxRadioFocus,
  },
  boxPressed: {
    transform: [
      { scaleX: defaultTokens.modifierScaleCheckboxRadioActive },
      { scaleY: defaultTokens.modifierScaleCheckboxRadioActive },
    ],
    borderWidth: 1,
    borderColor: defaultTokens.borderColorCheckboxRadioActive,
  },
  boxError: {
    borderColor: defaultTokens.borderColorCheckboxRadioError,
  },
});
