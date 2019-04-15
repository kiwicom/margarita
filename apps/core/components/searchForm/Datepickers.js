// @flow

import * as React from 'react';
import { Platform } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { format, isSameDay } from 'date-fns';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  withLayoutContext,
  LAYOUT,
  type LayoutContextState,
} from '@kiwicom/margarita-device';
import {
  LONG_DAY_MONTH_FORMAT,
  TRIP_TYPES,
  type TripTypes,
} from '@kiwicom/margarita-config';

import {
  withSearchContext,
  type SearchContextState,
} from '../../scenes/search/SearchContext';
import PickersWrapper from './PickersWrapper';
import DatePicker from './DatePicker';

type Props = {|
  +tripType: string,
  +dateFrom: Date,
  +dateTo: Date,
  +returnDateFrom: Date,
  +returnDateTo: Date,
  +setDepartureDate: (Date, Date) => void,
  +setReturnDate: (Date, Date) => void,
  +setTripType: TripTypes => void,
  +layout: number,
|};

type State = {|
  isDepartureDatePickerVisible: boolean,
  isArrivalDatePickerVisible: boolean,
|};

class Datepickers extends React.Component<Props, State> {
  state = {
    isDepartureDatePickerVisible: false,
    isArrivalDatePickerVisible: false,
  };

  handleDepartureDatePress = () => {
    this.setState({
      isDepartureDatePickerVisible: true,
    });
  };

  handleReturnDatePress = () => {
    this.setState({
      isArrivalDatePickerVisible: true,
    });
  };

  handleDatePickerDismiss = () => {
    this.setState({
      isDepartureDatePickerVisible: false,
      isArrivalDatePickerVisible: false,
    });
  };

  handleDateChange = (dates: $ReadOnlyArray<Date>) => {
    const {
      tripType,
      setDepartureDate,
      setReturnDate,
      setTripType,
    } = this.props;

    if (this.state.isDepartureDatePickerVisible) {
      setDepartureDate(...dates);
    }
    if (this.state.isArrivalDatePickerVisible) {
      setReturnDate(...dates);
      if (tripType === TRIP_TYPES.ONEWAY) {
        setTripType(TRIP_TYPES.RETURN);
      }
    }

    this.handleDatePickerDismiss();
  };

  getDateNames = (dates: ?$ReadOnlyArray<Date>) => {
    const formatDate = (unformatedDate: Date) =>
      format(unformatedDate, LONG_DAY_MONTH_FORMAT);
    if (Array.isArray(dates)) {
      if (isSameDay(dates[0], dates[1])) {
        return formatDate(dates[0]);
      }
      return dates.reduce((acc, date, index) => {
        if (date) {
          const prefix = index > 0 ? ' - ' : '';
          return `${acc}${prefix}${formatDate(date)}`;
        }
        return acc;
      }, '');
    }
    return '';
  };

  render() {
    const {
      tripType,
      dateFrom,
      dateTo,
      returnDateFrom,
      returnDateTo,
      layout,
    } = this.props;
    const rowLayout = layout >= LAYOUT.largeMobile;
    const showReturnInput =
      tripType === TRIP_TYPES.RETURN || Platform.OS === 'web';
    const returnType = tripType === TRIP_TYPES.RETURN;

    const departureDates = [dateFrom, dateTo];
    const arrivalDates = [returnDateFrom, returnDateTo];
    const sharedDatePickerProps = {
      onConfirm: this.handleDateChange,
      onDismiss: this.handleDatePickerDismiss,
      buttonLabels: { cancel: 'Cancel', confirm: 'OK' },
      numberOfRenderedMonths: 12,
      weekStartsOn: 1,
    };
    return (
      <>
        <PickersWrapper layout={layout}>
          <DatePicker
            style={rowLayout && styles.rowInput}
            onPress={this.handleDepartureDatePress}
            label="Departure"
            icon="calendar"
            value={this.getDateNames(departureDates)}
            dates={departureDates}
            isVisible={this.state.isDepartureDatePickerVisible}
            {...sharedDatePickerProps}
          />

          {showReturnInput && (
            <DatePicker
              onPress={this.handleReturnDatePress}
              label={returnType ? TRIP_TYPES.RETURN : ''}
              icon="calendar"
              value={returnType ? this.getDateNames(arrivalDates) : 'No return'}
              dates={arrivalDates}
              isVisible={this.state.isArrivalDatePickerVisible}
              {...sharedDatePickerProps}
            />
          )}
        </PickersWrapper>
      </>
    );
  }
}

const styles = StyleSheet.create({
  rowInput: {
    web: {
      marginEnd: parseInt(defaultTokens.spaceXSmall, 10),
    },
  },
});

const layoutSelect = ({ layout }: LayoutContextState) => ({
  layout,
});

const select = ({
  dateFrom,
  dateTo,
  returnDateFrom,
  returnDateTo,
  tripType,
  actions: { setTripType, setDepartureDate, setReturnDate },
}: SearchContextState) => ({
  dateFrom,
  dateTo,
  returnDateFrom,
  returnDateTo,
  tripType,
  setTripType,
  setDepartureDate,
  setReturnDate,
});

export default withLayoutContext(layoutSelect)(
  withSearchContext(select)(Datepickers),
);
