// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, select, date as dateAddon } from '@storybook/addon-knobs';
import { StyleSheet } from '../PlatformStyleSheet';

import { Button } from '../Button';
import { Text } from '../Text';
import DatePicker from './DatePicker';

type State = {
  isOpen: boolean,
  date: Date,
};

// NOTE: currentDate is used for default min & max limit values and is defined outside
// of component because the default value for dateAddon must not change
const currentDate = new Date();
const dateMinMaxOffset = 1000 * 60 * 60 * 24 * 30;

class DateTimePicker extends React.Component<{}, State> {
  state = {
    isOpen: false,
    date: new Date(),
  };

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
      new Date(currentDate.getTime() - dateMinMaxOffset)
    );
    const maxDateStringTimestamp = dateAddon(
      'Max date',
      new Date(currentDate.getTime() + dateMinMaxOffset)
    );
    let datePickerMode;

    if (Platform.OS === 'android') {
      datePickerMode = select(
        'Picker Mode',
        ['calendar', 'spinner', 'default'],
        'default'
      );
    }

    return (
      <View style={styles.container}>
        <Button onPress={this.showDatePicker} label="Open date picker" />
        <DatePicker
          isVisible={isOpen}
          mode={mode}
          datePickerMode={datePickerMode}
          date={date}
          minDate={new Date(minDateStringTimestamp)}
          maxDate={new Date(maxDateStringTimestamp)}
          onConfirm={this.handleDateChange}
          onDismiss={this.hideDatePicker}
        />
        <Text>Selected date: {date.toString()}</Text>
        <Button onPress={this.handleDateReset} label="Reset Date" />
      </View>
    );
  }
}

const noop = () => {};

storiesOf('DatePicker', module)
  .addDecorator(withKnobs)
  .lokiSkip('Playground', () => <DateTimePicker />)
  .add('Default', () => (
    <DatePicker
      isVisible
      mode="date"
      datePickerMode="default"
      date={new Date('01/25/2019')}
      minDate={new Date('01/24/2019')}
      maxDate={new Date('01/29/2019')}
      onConfirm={noop}
      onDismiss={noop}
    />
  ));

const styles = StyleSheet.create({
  container: {
    minHeight: 360,
  },
});
