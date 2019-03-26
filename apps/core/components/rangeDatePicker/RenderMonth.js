// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { Text } from '@kiwicom/margarita-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { format } from 'date-fns';
import { MONTH_NAME_FORMAT } from '@kiwicom/margarita-config';
import memoize from 'memoize-one';
import { equals } from 'ramda';

import RenderWeek from './RenderWeek';
import { type MonthDate, getMonthMatrix } from './libs';

type Props = {|
  +monthDate: MonthDate,
  +onDayPress: Date => void,
  +selectedDate: Date,
|};

export default class RenderMonth extends React.Component<Props> {
  shouldComponentUpdate(nextProps: Props) {
    const checkDate = props =>
      props.selectedDate &&
      props.selectedDate.getMonth() === props.monthDate.month &&
      props.selectedDate.getFullYear() === props.monthDate.year;
    return checkDate(nextProps) || checkDate(this.props);
  }

  getWeeks = memoize((monthDate: MonthDate) => {
    return getMonthMatrix(monthDate, (day, { isSameMonth }) =>
      isSameMonth ? new Date(day) : null,
    );
  }, equals);

  render() {
    const { monthDate, onDayPress, selectedDate } = this.props;
    const keyPrefix = `${this.props.monthDate.year}-${
      this.props.monthDate.month
    }`;
    const weeks = this.getWeeks(this.props.monthDate);
    return (
      <View>
        <Text weight="bold" style={styles.monthLabel}>
          {format(new Date(0, monthDate.month), MONTH_NAME_FORMAT)}{' '}
          <Text weight="bold" style={styles.year}>
            {monthDate.year}
          </Text>
        </Text>
        {weeks.map((week, index) => (
          <RenderWeek
            key={`${keyPrefix}-${index}`}
            data={week}
            keyPrefix={keyPrefix}
            onDayPress={onDayPress}
            selectedDate={selectedDate}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  monthLabel: {
    marginTop: 20,
    marginBottom: parseFloat(defaultTokens.spaceMedium),
    marginHorizontal: parseFloat(defaultTokens.spaceXSmall),
    fontSize: parseFloat(defaultTokens.fontSizeTextLarge),
  },
  year: {
    color: defaultTokens.colorTextSecondary,
  },
});
