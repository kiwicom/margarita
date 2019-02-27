// @flow

import * as React from 'react';
import { DatePickerAndroid, TimePickerAndroid } from 'react-native';

import type { Props } from './DatePickerTypes';

export default class AndroidDatePicker extends React.Component<Props> {
  static defaultProps = {
    mode: 'date',
    datePickerMode: 'default',
  };

  componentDidMount = () => {
    const { isVisible, mode } = this.props;

    if (this.props && isVisible) {
      if (mode === 'date' || mode === 'datetime') {
        this.showDatePicker();
      } else {
        this.showTimePicker();
      }
    }
  };

  componentDidUpdate = (prevProps: Props) => {
    const { isVisible, mode } = this.props;

    if (!prevProps.isVisible && isVisible) {
      if (mode === 'date' || mode === 'datetime') {
        this.showDatePicker();
      } else {
        this.showTimePicker();
      }
    }
  };

  showDatePicker = async () => {
    const {
      minDate,
      maxDate,
      datePickerMode,
      mode,
      date = new Date(),
      onConfirm,
      onDismiss,
    } = this.props;
    let picker;
    try {
      picker = await DatePickerAndroid.open({
        date,
        minDate,
        maxDate,
        mode: datePickerMode,
      });
    } catch (e) {
      return;
    }

    const { action, year, month, day } = picker;
    if (action !== DatePickerAndroid.dismissedAction) {
      let customDate;
      if (date && !isNaN(date.getTime())) {
        const hour = date.getHours();
        const minute = date.getMinutes();
        customDate = new Date(year, month, day, hour, minute);
      } else {
        customDate = new Date(year, month, day);
      }

      if (mode === 'datetime') {
        const timeOptions = {
          mode: datePickerMode,
          hour: date && date.getHours(),
          minute: date && date.getMinutes(),
        };

        let pickerTime;
        try {
          pickerTime = await TimePickerAndroid.open(timeOptions);
        } catch (e) {
          return;
        }

        const { action: timeAction, hour, minute } = pickerTime;
        if (timeAction !== TimePickerAndroid.dismissedAction) {
          const selectedDate = new Date(year, month, day, hour, minute);
          onConfirm(selectedDate);
        } else {
          onDismiss();
        }
      } else {
        onConfirm(customDate);
      }
    } else {
      onDismiss();
    }
  };

  showTimePicker = async () => {
    const {
      date = new Date(),
      datePickerMode,
      onConfirm,
      onDismiss,
    } = this.props;
    let picker;
    try {
      picker = await TimePickerAndroid.open({
        hour: date.getHours(),
        minute: date.getMinutes(),
        mode: datePickerMode,
      });
    } catch (e) {
      return;
    }

    const { action, hour, minute } = picker;
    if (action !== TimePickerAndroid.dismissedAction) {
      let customDate;
      if (date) {
        // This prevents losing the Date elements, see issue #71
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        customDate = new Date(year, month, day, hour, minute);
      } else {
        customDate = new Date();
        customDate.setHours(hour, minute);
      }
      onConfirm(customDate);
    } else {
      onDismiss();
    }
  };

  render() {
    return null;
  }
}
