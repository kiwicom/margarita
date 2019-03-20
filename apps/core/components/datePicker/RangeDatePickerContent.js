// @flow

import * as React from 'react';
import { Animated, View, ScrollView } from 'react-native';
import { StyleSheet, Button } from '@kiwicom/universal-components';
import { TouchableWithoutFeedback, Text } from '@kiwicom/margarita-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { format } from 'date-fns';

import { getMonthMatrix, getNextMonths, type MonthDate } from './libs';

type Props = {||};

const NUMBER_OF_RENDERED_MONTHS = 3;

// @TODO update keys
const RenderMonth = ({ monthDate }) => {
  const monthMatrix = getMonthMatrix(monthDate, (day, { isSameMonth }) =>
    isSameMonth ? format(day, 'd') : '',
  );
  return (
    <View>
      <Text weight="bold" style={styles.monthLabel}>
        {monthDate.month}
      </Text>
      {monthMatrix.map((week, index) => (
        <RenderWeek key={index} week={week} />
      ))}
    </View>
  );
};

const RenderWeek = ({ week }) => (
  <View style={styles.row}>
    {week.map((day, index) => (
      <RenderDay key={index} day={day} />
    ))}
  </View>
);

const RenderDay = ({ day }) => <Text style={styles.day}>{day}</Text>;

class DatePicker extends React.Component<Props> {
  static nextMonths: Array<MonthDate> = getNextMonths(
    NUMBER_OF_RENDERED_MONTHS,
  );

  render() {
    return (
      <ScrollView style={styles.container}>
        {DatePicker.nextMonths.map<React.Node>((monthObject, index) => (
          <RenderMonth key={index} monthDate={monthObject} />
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    maxWidth: 720,
    width: 400,
  },
  row: {
    flexDirection: 'row',
  },
  day: {
    width: '14%',
    maxWidth: 100,
  },
  monthLabel: {
    marginTop: 20,
  },
});

export default DatePicker;
