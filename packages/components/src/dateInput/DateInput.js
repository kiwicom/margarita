// @flow

import * as React from 'react';
import { View } from 'react-native';
import format from 'date-fns/format';
import {
  DatePicker,
  FormLabel,
  PickerButton,
  type StylePropType,
  type IconNameType,
} from '@kiwicom/universal-components';

export type Props = {|
  +label?: React.Node,
  +containerStyle?: StylePropType,
  +onDateChange: (value: ?Date) => void,
  +date: ?Date,
  +defaultDate: Date,
  +dateFormat: string,
  +confirmLabel: string,
  +cancelLabel: string,
  +placeholder?: string,
  +iconName?: IconNameType,
|};

type State = {|
  isPickerVisible: boolean,
|};

export default class DateInput extends React.Component<Props, State> {
  state = {
    isPickerVisible: false,
  };

  showDatePicker = () => this.setState({ isPickerVisible: true });

  hideDatePicker = () => this.setState({ isPickerVisible: false });

  handleDateChange = (date: ?Date) => {
    this.props.onDateChange(date);
    this.hideDatePicker();
  };

  render() {
    const { isPickerVisible } = this.state;
    const {
      label,
      containerStyle,
      date,
      defaultDate,
      dateFormat,
      placeholder,
      iconName,
      confirmLabel,
      cancelLabel,
    } = this.props;

    return (
      <View>
        {label != null && (
          <FormLabel containerStyle={containerStyle}>
            {label}
          </FormLabel>
        )}
        <PickerButton
          value={date ? format(date, dateFormat) : null}
          placeholder={placeholder}
          onPress={this.showDatePicker}
          iconName={iconName}
        />
        <DatePicker
          isVisible={isPickerVisible}
          labels={{
            cancel: cancelLabel,
            confirm: confirmLabel,
          }}
          date={date ?? defaultDate}
          onConfirm={this.handleDateChange}
          onDismiss={this.hideDatePicker}
        />
      </View>
    );
  }
}
