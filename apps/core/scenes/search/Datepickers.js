// @flow

import * as React from 'react';
import { View } from 'react-native';
import { TripInput } from '@kiwicom/margarita-components';
import { Icon, DatePicker, StyleSheet } from '@kiwicom/universal-components';
import { format, startOfDay } from 'date-fns';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +tripType: string,
  +dateFrom: Date,
  +returnDateFrom: Date,
  +setDepartureDate: Date => void,
  +setReturnDate: Date => void,
|};

type State = {|
  isDatePickerVisible: boolean,
  datePickerDate: Date,
  selectDate: $Keys<typeof DATEPICKER_MODE> | null,
|};

const getFormatedDate = date => {
  return format(date, 'YYYY-MM-DD');
};

const DATEPICKER_MODE = {
  DEPARTURE: 'DEPARTURE',
  RETURN: 'RETURN',
};

class Datepickers extends React.Component<Props, State> {
  state = {
    isDatePickerVisible: false,
    datePickerDate: new Date(),
    selectDate: null,
  };

  handleDepartureDatePress = () => {
    this.setState({
      datePickerDate: this.props.dateFrom,
      isDatePickerVisible: true,
      selectDate: DATEPICKER_MODE.DEPARTURE,
    });
  };

  handleReturnDatePress = () => {
    this.setState({
      datePickerDate: this.props.returnDateFrom,
      isDatePickerVisible: true,
      selectDate: DATEPICKER_MODE.RETURN,
    });
  };

  handleDatePickerDismiss = () => {
    this.setState({
      isDatePickerVisible: false,
    });
  };

  handleDateChange = (date: Date) => {
    switch (this.state.selectDate) {
      case DATEPICKER_MODE.DEPARTURE:
        this.props.setDepartureDate(date);
        break;
      case DATEPICKER_MODE.RETURN:
        this.props.setReturnDate(date);
        break;
      default:
        break;
    }
    this.handleDatePickerDismiss();
  };

  render() {
    const { tripType, dateFrom, returnDateFrom } = this.props;

    return (
      <>
        <TripInput
          onPress={this.handleDepartureDatePress}
          label="Departure"
          icon={<Icon name="calendar" />}
          value={getFormatedDate(dateFrom)}
        />
        {tripType === 'return' && (
          <TripInput
            onPress={this.handleReturnDatePress}
            label="Return"
            icon={<Icon name="calendar" />}
            value={getFormatedDate(returnDateFrom)}
          />
        )}
        <View style={this.state.isDatePickerVisible && styles.picker}>
          <DatePicker
            isVisible={this.state.isDatePickerVisible}
            mode={'date'}
            date={this.state.datePickerDate}
            minDate={startOfDay(new Date())}
            onConfirm={this.handleDateChange}
            onDismiss={this.handleDatePickerDismiss}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  picker: {
    web: {
      position: 'fixed',
      top: 50,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: parseInt(defaultTokens.zIndexDefault, 10),
    },
  },
});

export default Datepickers;
