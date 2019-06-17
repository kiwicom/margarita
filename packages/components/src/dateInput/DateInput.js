// @flow

import React from 'react';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { View } from 'react-native';
import {
  StyleSheet,
  Picker,
  Text,
  TextInput,
} from '@kiwicom/universal-components';
import { setMonth, getDate, getMonth, getYear, format } from 'date-fns';
import { MAX_YEAR_LENGTH, MAX_DAY_LENGTH } from '@kiwicom/margarita-config';

import { composeDateFromStrings } from './helpers';

type Props = {|
  +onDateChange: (?Date) => void,
  +date: ?Date,
  +isEditModeEnabled: boolean,
|};

type Month = {|
  value: string,
  label: string,
|};

type State = {|
  day: string,
  month: string,
  year: string,
  hasPrefilledState: boolean,
|};

const getMonthOptions = () => {
  return [...Array(12).keys()].map<Month>(
    (currentMonth: number): Month => ({
      value: String(currentMonth),
      label: format(setMonth(new Date(), currentMonth), 'MMMM'),
    }),
  );
};

export default class DateInput extends React.Component<Props, State> {
  state = {
    day: '',
    month: '0',
    year: '',
    hasPrefilledState: false,
  };

  static getDerivedStateFromProps(props: Props, state: State) {
    const { date, isEditModeEnabled } = props;
    if (!isEditModeEnabled) {
      return state;
    }
    if (isEditModeEnabled && date && !state.hasPrefilledState) {
      return {
        day: String(getDate(date)),
        month: String(getMonth(date)),
        year: String(getYear(date)),
        hasPrefilledState: true,
      };
    }
    return state;
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { onDateChange } = this.props;
    const { day, month, year } = this.state;
    if (day !== prevState.day || year !== prevState.year) {
      if (day.length === MAX_DAY_LENGTH && year.length === MAX_YEAR_LENGTH) {
        const composedDate = composeDateFromStrings(day, month, year);
        if (composedDate) onDateChange(composedDate);
      } else {
        onDateChange(null);
      }
    }
  }

  handleDayChange = (input: string) => {
    const day = input.slice(0, MAX_DAY_LENGTH);
    this.setState({ day });
  };

  handleMonthChange = (month: ?string) => {
    if (month) this.setState({ month });
  };

  handleYearChange = (input: string) => {
    const year = input.slice(0, MAX_YEAR_LENGTH);
    this.setState({ year });
  };

  render() {
    const { day, month, year } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Date of birth</Text>
        <View style={styles.dateFormWrapper}>
          <View style={styles.dayPickerWrapper}>
            <TextInput
              onChangeText={this.handleDayChange}
              placeholder="DD"
              autoCorrect={false}
              value={day}
              type="number"
            />
          </View>
          <View style={styles.monthPickerWrapper}>
            <Picker
              selectedValue={month}
              optionsData={getMonthOptions()}
              onValueChange={this.handleMonthChange}
              placeholder="Month"
              confirmLabel="OK"
            />
          </View>
          <View style={styles.yearPickerWrapper}>
            <TextInput
              onChangeText={this.handleYearChange}
              autoCorrect={false}
              value={year}
              placeholder="YYYY"
              type="number"
            />
          </View>
        </View>
      </View>
    );
  }
}

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
