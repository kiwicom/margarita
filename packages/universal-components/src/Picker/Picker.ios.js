// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Button } from '../Button';
import { Modal } from '../Modal';
import { StyleSheet } from '../PlatformStyleSheet';
import type { Props } from './PickerTypes';
import { getSelectedLabel } from './PickerHelpers';
import NativePicker from './NativePicker';
import { FormLabel } from '../FormLabel';
import { PickerButton } from '../PickerButton';

export type State = {|
  open: boolean,
  selectedValue: ?string,
  pickerValue: ?string,
|};

export default class Picker extends React.Component<Props, State> {
  static defaultProps = {
    placeholder: '',
  };

  constructor(props: Props) {
    super(props);

    const { selectedValue } = this.props;

    this.state = {
      open: false,
      selectedValue,
      pickerValue: selectedValue,
    };
  }

  componentDidUpdate = (prevProps: Props) => {
    if (
      this.props.selectedValue !== prevProps.selectedValue &&
      this.props.selectedValue !== this.state.selectedValue
    ) {
      this.setState({
        selectedValue: this.props.selectedValue,
        pickerValue: this.props.selectedValue,
      });
    }
  };

  handleOpenPress = () => {
    this.setState({
      open: true,
    });
  };

  handleModalClose = () => {
    this.setState({
      open: false,
    });
  };

  handlePickerValueChange = (value: string) => {
    this.setState({ pickerValue: value });
  };

  handleOkPress = () => {
    const { pickerValue } = this.state;
    const { onValueChange } = this.props;
    this.setState({
      open: false,
      selectedValue: pickerValue,
    });
    onValueChange(pickerValue);
  };

  render() {
    const { open, selectedValue, pickerValue } = this.state;
    const {
      optionsData,
      confirmLabel,
      placeholder,
      iconName,
      label,
      formLabelContainerStyle,
      formLabelTextStyle,
    } = this.props;
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
            onPress={this.handleOpenPress}
            iconName={iconName}
          />
          <Modal
            isVisible={open}
            style={styles.modal}
            onRequestClose={this.handleModalClose}
            onBackdropPress={this.handleModalClose}
          >
            <View style={styles.container}>
              <NativePicker
                optionsData={optionsData}
                selectedValue={pickerValue}
                style={styles.picker}
                onValueChange={this.handlePickerValueChange}
              />
              <View style={styles.confirmContainer}>
                <Button
                  onPress={this.handleOkPress}
                  type="secondary"
                  label={confirmLabel}
                />
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  container: {
    width: '100%',
    backgroundColor: defaultTokens.backgroundModal,
    borderTopStartRadius: parseInt(defaultTokens.borderRadiusLarge, 10),
    borderTopEndRadius: parseInt(defaultTokens.borderRadiusLarge, 10),
    paddingTop: parseInt(defaultTokens.spaceXXSmall, 10),
    paddingBottom: parseInt(defaultTokens.spaceXXLarge, 10),
  },
  picker: {
    width: '100%',
  },
  confirmContainer: {
    marginHorizontal: parseInt(defaultTokens.spaceXSmall, 10),
  },
});
