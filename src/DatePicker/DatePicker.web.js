// @flow

import * as React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import type { Props } from './DatePickerTypes';

type State = {
  date: Date,
};

export default class WebDatePicker extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      date: props.date || new Date(),
    };
  }

  handleConfirm = (date: Date) => {
    const { onConfirm } = this.props;

    this.setState({
      date,
    });

    onConfirm(date);
  };

  render() {
    const { minDate, maxDate, customInput, mode } = this.props;
    const { date } = this.state;

    const showTimeSelect = mode === 'time' || mode === 'datetime';
    const showTimeSelectOnly = mode === 'time';

    return (
      <DatePicker
        selected={date}
        onChange={this.handleConfirm}
        minDate={minDate}
        maxDate={maxDate}
        customInput={customInput}
        showTimeSelect={showTimeSelect}
        showTimeSelectOnly={showTimeSelectOnly}
        timeIntervals={1}
      />
    );
  }
}
