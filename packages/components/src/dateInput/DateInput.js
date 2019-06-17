// @flow

import React from 'react';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { format, setMonth } from 'date-fns';
import { View } from 'react-native';
import {
  StyleSheet,
  Picker,
  Text,
  TextInput,
} from '@kiwicom/universal-components';

type Props = {|
  +onDateChange: (string, string) => void,
  +date: {
    +day: string,
    +month: string,
    +year: string,
  },
  +errors: {
    +day: string,
    +year: string,
  },
|};

type Month = {|
  value: string,
  label: string,
|};

class DateInput extends React.Component<Props> {
  getMonthOptions = () => {
    return [...Array(12).keys()].map<Month>((currentMonth: number): Month => ({
      value: String(currentMonth),
      label: format(setMonth(new Date(), currentMonth), 'MMMM'),
    }));
  };

  handleDayChange = (day: string) => {
    this.props.onDateChange(day, 'day');
  };

  handleMonthChange = (month: ?string) => {
    if (month) {
      this.props.onDateChange(month, 'month');
    }
  };

  handleYearChange = (year: string) => {
    this.props.onDateChange(year, 'year');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Date of birth</Text>
        <View style={styles.dateFormWrapper}>
          <View style={styles.dayPickerWrapper}>
            <TextInput
              onChangeText={this.handleDayChange}
              placeholder="DD"
              autoCorrect={false}
              value={this.props.date.day}
              type="number"
              error={this.props.errors.day}
            />
          </View>
          <View style={styles.monthPickerWrapper}>
            <Picker
              selectedValue={this.props.date.month}
              optionsData={this.getMonthOptions()}
              onValueChange={this.handleMonthChange}
              placeholder="Month"
              confirmLabel="OK"
            />
          </View>
          <View style={styles.yearPickerWrapper}>
            <TextInput
              onChangeText={this.handleYearChange}
              autoCorrect={false}
              value={this.props.date.year}
              placeholder="YYYY"
              type="number"
              error={this.props.errors.year}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default DateInput;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: parseInt(defaultTokens.spaceSmall, 10),
  },
  dateFormWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    marginStart: parseInt(defaultTokens.spaceSmall, 10),
    marginBottom: parseInt(defaultTokens.spaceXXSmall, 10),
  },
  dayPickerWrapper: {
    flex: 0.2,
  },
  monthPickerWrapper: {
    flex: 0.4,
  },
  yearPickerWrapper: {
    flex: 0.3,
  },
});
