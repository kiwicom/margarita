// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, select, date as dateAddon } from '@storybook/addon-knobs';

import { Button } from '../Button';
import { Text } from '../Text';

import { DatePicker } from '.';

type Props = {|
  +isOpen?: boolean,
|};

type State = {
  isOpen: boolean,
  date: Date,
};

const labels = {
  cancel: 'CANCEL',
  confirm: 'OK',
};

class DateTimePicker extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: props.isOpen ?? false,
      date: new Date('2019-01-16'),
    };
  }

  showDatePicker = () => this.setState({ isOpen: true });

  hideDatePicker = () => this.setState({ isOpen: false });

  handleDateChange = date => {
    this.setState({ date }, () => this.hideDatePicker());
  };

  handleDateReset = () => {
    this.setState({ date: new Date() });
  };

  render() {
    const { isOpen, date } = this.state;
    const mode = select('Mode', ['date', 'time', 'datetime'], 'date');
    const minDateStringTimestamp = dateAddon(
      'Min date',
      new Date('2019-01-14'),
    );
    const maxDateStringTimestamp = dateAddon(
      'Max date',
      new Date('2019-02-18'),
    );
    let datePickerMode;

    if (Platform.OS === 'android') {
      datePickerMode = select(
        'Picker Mode',
        ['calendar', 'spinner', 'default'],
        'default',
      );
    }

    return (
      <>
        <View>
          <Button onPress={this.showDatePicker} label="Open date picker" />
          <Text>Selected date: {date.toString()}</Text>
          <Button onPress={this.handleDateReset} label="Reset Date" />
        </View>
        <DatePicker
          isVisible={isOpen}
          labels={labels}
          mode={mode}
          datePickerMode={datePickerMode}
          date={date}
          minDate={new Date(minDateStringTimestamp)}
          maxDate={new Date(maxDateStringTimestamp)}
          onConfirm={this.handleDateChange}
          onDismiss={this.hideDatePicker}
        />
      </>
    );
  }
}

storiesOf('DatePicker', module)
  .addDecorator(withKnobs)
  .add('Playground', () => <DateTimePicker />)
  .add('Default', () => <DateTimePicker isOpen />);
