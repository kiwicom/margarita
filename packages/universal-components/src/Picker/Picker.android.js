// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { StyleSheet } from '../PlatformStyleSheet';
import type { Props } from './PickerTypes';
import { getSelectedLabel } from './PickerHelpers';
import NativePicker from './NativePicker';
import { FormLabel } from '../FormLabel';
import { PickerButton } from '../PickerButton';

const Picker = ({
  optionsData,
  selectedValue,
  onValueChange,
  placeholder = '',
  iconName,
  label,
  formLabelContainerStyle,
  formLabelTextStyle,
}: Props) => {
  const selectedLabel = getSelectedLabel(optionsData, selectedValue);

  return (
    <View>
      {label != null && (
        <FormLabel
          containerStyle={formLabelContainerStyle}
          labelStyle={formLabelTextStyle}
        >
          {label}
        </FormLabel>
      )}
      <View>
        <PickerButton
          placeholder={placeholder}
          value={selectedLabel}
          iconName={iconName}
        />
        <NativePicker
          optionsData={optionsData}
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={onValueChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    position: 'absolute',
    start: 0,
    width: '100%',
    opacity: 0, // NOTE: This workaround is required because picker label cannot be currently styled on Android
    height: parseInt(defaultTokens.heightInputNormal, 10),
  },
});

export default Picker;
