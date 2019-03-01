// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { StyleSheet } from '../PlatformStyleSheet';
import DatePickerDayTile from './DatePickerDayTile';
import { Button } from '../Button';
import { Text } from '../Text';
import { Modal } from '../Modal';
import {
  getPreviousMonthData,
  getNextMonthData,
  getStartOfDayTime,
} from './DatePickerHelpers';
import type { Props } from './DatePickerTypes';

type State = {
  date: Date,
  month: number,
  year: number,
};

const parsePropsToState = date => {
  const tempDate = date ?? new Date();
  return {
    date: tempDate,
    month: tempDate.getMonth(),
    year: tempDate.getFullYear(),
  };
};

export default class WebDatePicker extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = parsePropsToState(props.date);
  }

  componentDidUpdate = (prevProps: Props) => {
    const { date } = this.props;
    if (date && date !== prevProps.date) {
      this.setState(parsePropsToState(date));
    }
  };

  handleDaySelect = (dayId: number) => {
    const { onConfirm } = this.props;
    const { month, year } = this.state;
    const date = new Date(year, month, dayId);
    this.setState(parsePropsToState(date));
    onConfirm(date);
  };

  swapMonthBack = () => {
    this.setState(getPreviousMonthData);
  };

  swapMonthForward = () => {
    this.setState(getNextMonthData);
  };

  render() {
    const { isVisible, labels, minDate, maxDate, onDismiss } = this.props;
    const { date, month, year } = this.state;

    if (!isVisible) {
      return null;
    }

    const monthLength = new Date(year, month + 1, 0).getDate();
    const startDay = new Date(year, month, 1).getDay();
    const selectedDateTime = getStartOfDayTime(date);
    const minDateTime = minDate ? getStartOfDayTime(minDate) : 0;
    const maxDateTime = maxDate
      ? getStartOfDayTime(maxDate)
      : Number.MAX_SAFE_INTEGER;
    const backDisabled =
      minDate && year <= minDate.getFullYear() && month <= minDate.getMonth();
    const forwardDisabled =
      maxDate && year >= maxDate.getFullYear() && month >= maxDate.getMonth();

    const dayTiles = [];
    for (let i = 0; i < startDay + monthLength; i += 1) {
      const dayId = i + 1 - startDay;
      const tempDateTime =
        dayId > 0 ? new Date(year, month, dayId).getTime() : 0;
      const disabled = tempDateTime < minDateTime || tempDateTime > maxDateTime;
      dayTiles.push(
        <DatePickerDayTile
          key={`${year}-${month}-${i}`}
          dayId={dayId}
          selected={tempDateTime === selectedDateTime}
          disabled={disabled}
          onDaySelect={this.handleDaySelect}
        />,
      );
    }

    const weekRows = [];
    while (dayTiles.length > 0) {
      const key = `${year}-${month}-${weekRows.length}`;
      weekRows.push(
        <View key={key} style={styles.weekRow}>
          {dayTiles.splice(0, 7)}
        </View>,
      );
    }

    return (
      <Modal
        isVisible={isVisible}
        onRequestClose={onDismiss}
        onBackdropPress={onDismiss}
      >
        <View style={styles.picker}>
          <View style={styles.head}>
            <Button
              width={40}
              onPress={this.swapMonthBack}
              disabled={backDisabled}
              type="secondary"
              label="<"
            />
            <View style={styles.headLabel}>
              <Text>{month + 1}</Text>
              <Text size="small">{year}</Text>
            </View>
            <Button
              width={40}
              onPress={this.swapMonthForward}
              disabled={forwardDisabled}
              type="secondary"
              label=">"
            />
          </View>
          <View style={styles.month}>{weekRows}</View>
          <Button onPress={onDismiss} label={labels.cancel} />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  picker: {
    padding: 10,
    backgroundColor: defaultTokens.paletteWhite,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headLabel: {
    flex: 1,
    alignItems: 'center',
  },
  weekRow: {
    flexDirection: 'row',
  },
  month: {
    marginTop: 10,
    height: 215,
  },
});
