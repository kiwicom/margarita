// @flow

import type { PickerOption } from './PickerTypes';

export const getSelectedLabel = (
  optionsData: $ReadOnlyArray<PickerOption>,
  value: ?string,
  placeholder: string = '',
): string => {
  const selectedOption = optionsData.find(option => option.value === value);
  return selectedOption ? selectedOption.label : placeholder;
};
