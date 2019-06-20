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
  NUMBER_OF_RENDERED_MONTHS_IN_DATE_PICKER,
  type TripType,
} from '@kiwicom/margarita-config';

import {
  withSearchContext,
  type SearchContextState,
} from '../../contexts/searchContext';
import PickersWrapper from './PickersWrapper';
import DatePicker from './DatePicker';
import { type ConfirmType } from './DatePickerTypes';

type Props = {|
  +tripType: string,
  +dateFrom: Date,
  +dateTo: Date,
  +returnDateFrom: Date,
  +returnDateTo: Date,
  +isNightsInDestinationSelected: boolean,
  +nightsInDestinationFrom: string,
  +nightsInDestinationTo: string,
  +setDepartureDate: (Date, Date) => void,
  +setReturnDate: (Date, Date) => void,
  +setNightsInDestination: (number, number) => void,
  +setNightsInDestinationSelection: boolean => void,
  +setTripType: TripType => void,
  +layout: number,
  +onDateSelect: () => void,
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

  handleDateChange = async ({
    dates,
    isNightsInDestinationSelected,
    nightsInDestination,
  }: ConfirmType) => {
    const {
      tripType,
      setDepartureDate,
      setReturnDate,
      setTripType,
      setNightsInDestination,
      setNightsInDestinationSelection,
    } = this.props;

    if (this.state.isDepartureDatePickerVisible && dates) {
      await setDepartureDate(...dates);
    }
    if (
      this.state.isArrivalDatePickerVisible &&
      isNightsInDestinationSelected != null
    ) {
      await setNightsInDestinationSelection(isNightsInDestinationSelected);
      if (!isNightsInDestinationSelected && dates) {
        await setReturnDate(...dates);
      } else if (nightsInDestination) {
        await setNightsInDestination(...nightsInDestination);
      }
      if (tripType === TRIP_TYPES.ONEWAY) {
        await setTripType(TRIP_TYPES.RETURN);
      }
    }
    this.props.onDateSelect();
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

  getNightsInDestinationNames = (nightsInDestination: ?Array<number>) => {
    if (Array.isArray(nightsInDestination)) {
      return `${nightsInDestination[0]} - ${nightsInDestination[1]} nights`;
    }
    return '';
  };

  handleNightsInDestinationChange = (nightsInDestination: Array<number>) => {
    this.props.setNightsInDestination(
      nightsInDestination[0],
      nightsInDestination[1],
    );
  };

  handleNightsInDestinationSelectionChange = (
    isNightsInDestinationSelected: boolean,
  ) => {
    this.props.setNightsInDestinationSelection(isNightsInDestinationSelected);
  };

  getProperReturnName = ({
    returnType,
    arrivalDates,
    isNightsInDestinationSelected,
    nightsInDestination,
  }) => {
    if (returnType) {
      if (isNightsInDestinationSelected) {
        return this.getNightsInDestinationNames(nightsInDestination);
      }
      return this.getDateNames(arrivalDates);
    }
    return 'No return';
  };

  render() {
    const {
      tripType,
      dateFrom,
      dateTo,
      returnDateFrom,
      returnDateTo,
      layout,
      nightsInDestinationFrom,
      nightsInDestinationTo,
      isNightsInDestinationSelected,
    } = this.props;
    const rowLayout = layout >= LAYOUT.largeMobile;
    const showReturnInput =
      tripType === TRIP_TYPES.RETURN || Platform.OS === 'web';
    const returnType = tripType === TRIP_TYPES.RETURN;

    const nightsInDestination = [
      parseInt(nightsInDestinationFrom, 10),
      parseInt(nightsInDestinationTo, 10),
    ];
    const departureDates = [dateFrom, dateTo];
    const arrivalDates = [returnDateFrom, returnDateTo];
    const sharedDatePickerProps = {
      onConfirm: this.handleDateChange,
      onDismiss: this.handleDatePickerDismiss,
      numberOfRenderedMonths: NUMBER_OF_RENDERED_MONTHS_IN_DATE_PICKER,
      nightsInDestination: nightsInDestination,
      isNightsInDestinationSelected: isNightsInDestinationSelected,
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
              value={this.getProperReturnName({
                returnType,
                arrivalDates,
                isNightsInDestinationSelected,
                nightsInDestination,
              })}
              dates={arrivalDates}
              isVisible={this.state.isArrivalDatePickerVisible}
              isNightsInDestinationVisible
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
  isNightsInDestinationSelected,
  nightsInDestinationFrom,
  nightsInDestinationTo,
  tripType,
  actions: {
    setTripType,
    setDepartureDate,
    setReturnDate,
    setNightsInDestinationSelection,
    setNightsInDestination,
  },
}: SearchContextState) => ({
  dateFrom,
  dateTo,
  returnDateFrom,
  returnDateTo,
  isNightsInDestinationSelected,
  nightsInDestinationFrom,
  nightsInDestinationTo,
  tripType,
  setTripType,
  setDepartureDate,
  setReturnDate,
  setNightsInDestinationSelection,
  setNightsInDestination,
});

export default withLayoutContext(layoutSelect)(
  withSearchContext(select)(Datepickers),
);
