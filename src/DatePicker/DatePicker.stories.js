// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, select, date as dateAddon } from '@storybook/addon-knobs';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { Text } from '../Text';
import DatePicker from './DatePicker';
import { StyleSheet } from '../PlatformStyleSheet';

type State = {
  isOpen: boolean,
  date: string,
};

class DateTimePicker extends React.Component<{}, State> {
  state = {
    isOpen: false,
    date: '',
  };

  showDatePicker = () => this.setState({ isOpen: true });

  hideDatePicker = () => this.setState({ isOpen: false });

  handleDateChange = date => {
    this.setState({ date: date.toString() }, () => this.hideDatePicker());
  };

  render() {
    const { isOpen, date } = this.state;
    const mode = select('Mode', ['date', 'time', 'datetime'], 'date');
    const minDateStringTimestamp = dateAddon(
      'Min date',
      new Date('Dec 20 2018')
    );
    const maxDateStringTimestamp = dateAddon(
      'Max date',
      new Date('Jan 20 2019')
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
      <View>
        {Platform.OS !== 'web' && (
          <Button onPress={this.showDatePicker}>Open date picker</Button>
        )}
        <DatePicker
          isVisible={isOpen}
          onDismiss={this.hideDatePicker}
          onConfirm={this.handleDateChange}
          minDate={new Date(minDateStringTimestamp)}
          maxDate={new Date(maxDateStringTimestamp)}
          mode={mode}
          datePickerMode={datePickerMode}
          customInput={
            <View style={styles.customInputContainer}>
              <View style={styles.icon}>
                <Icon name="calendar" color={defaultTokens.colorTextWhite} />
              </View>
              <Text type="white" size="large">
                Date: {date}
              </Text>
            </View>
          }
        />

        {Platform.OS !== 'web' && <Text>Selected date: {date}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  customInputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: parseFloat(defaultTokens.spaceSmall),
    backgroundColor: defaultTokens.paletteProductNormal,
    borderRadius: parseFloat(defaultTokens.borderRadiusLarge),
  },
  icon: {
    marginEnd: 10,
  },
});

storiesOf('DatePicker', module)
  .addDecorator(withKnobs)
  .add('Playground', () => <DateTimePicker />);
