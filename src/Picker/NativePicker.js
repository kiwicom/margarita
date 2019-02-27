// @flow

import * as React from 'react';
import { Picker as RNPicker } from 'react-native';

import type { PickerOption } from './PickerTypes';
import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';

export type Props = {|
  +optionsData: $ReadOnlyArray<PickerOption>,
  +onValueChange: (value: string) => void,
  +selectedValue: ?string,
  +style: StylePropType,
|};

export default function NativePicker({
  optionsData,
  selectedValue,
  style,
  onValueChange,
}: Props) {
  const pickerOptions = optionsData.map(option => (
    <RNPicker.Item
      key={option.value}
      label={option.label}
      value={option.value}
    />
  ));

  return (
    <RNPicker
      selectedValue={selectedValue}
      style={style}
      onValueChange={onValueChange}
    >
      {pickerOptions}
    </RNPicker>
  );
}
