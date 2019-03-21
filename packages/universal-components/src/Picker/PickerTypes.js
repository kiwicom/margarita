// @flow

import * as React from 'react';

import { type StylePropType } from '../PlatformStyleSheet';
import type { IconNameType } from '../types/_generated-types';

export type PickerOption = {|
  +label: string,
  +value: string,
|};

export type Props = {|
  +label?: React.Node,
  +formLabelContainerStyle?: StylePropType,
  +formLabelTextStyle?: StylePropType,
  /**
   * Array with options data
   */
  +optionsData: $ReadOnlyArray<PickerOption>,
  /**
   * Dispatched on value change
   */
  +onValueChange: (value: ?string) => void,
  /**
   * Confirm button label, supported only on iOS
   */
  +confirmLabel: React.Node,
  /**
   * Selected option value
   */
  +selectedValue: ?string,
  /**
   * Placeholder text displayed if no option is selected
   */
  +placeholder?: string,
  /**
   * Picker button icon name, default native: 'chevron-right', default web: 'chevron-down'
   */
  +iconName?: IconNameType,
|};
