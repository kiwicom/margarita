// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { Props } from './PickerTypes';
import { FormLabel } from '../FormLabel';
import { PickerButton } from '../PickerButton';

/**
 * NOTE: `DEFAULT_OPTION` is used to show placeholder text
 * when no picker value is selected. It's achived by adding
 * disabled option with difefrent styling to `select` component
 */
const DEFAULT_OPTION = 'default-empty-option';

export default class Picker extends React.Component<Props> {
  static defaultProps = {
    placeholder: '',
  };

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { onValueChange } = this.props;
    onValueChange(event.target.value);
  };

  render() {
    const {
      optionsData,
      selectedValue,
      placeholder,
      iconName,
      label,
      formLabelContainerStyle,
      formLabelTextStyle,
    } = this.props;
    const showValue =
      selectedValue &&
      optionsData.findIndex(option => option.value === selectedValue) !== -1;

    const pickerOptions = [
      <option
        key={DEFAULT_OPTION}
        value={DEFAULT_OPTION}
        style={webStyles.defaultOption}
        disabled
      >
        {placeholder}
      </option>,
      ...optionsData.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      )),
    ];

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
          <PickerButton iconName={iconName} />
          <select
            value={showValue ? selectedValue : DEFAULT_OPTION}
            onChange={this.handleChange}
            style={{
              ...webStyles.picker,
              color: showValue
                ? defaultTokens.colorTextInput
                : defaultTokens.colorTextInputDisabled,
            }}
          >
            {pickerOptions}
          </select>
        </View>
      </View>
    );
  }
}

const webStyles = {
  picker: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: parseInt(defaultTokens.heightInputNormal, 10),
    paddingLeft: parseInt(defaultTokens.spaceSmall, 10),
    paddingRight: 44,
    fontFamily: 'Roboto',
    fontSize: parseInt(defaultTokens.fontSizeInputNormal, 10),
    background: 'transparent',
    border: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
  },
  defaultOption: {
    display: 'none',
  },
};
