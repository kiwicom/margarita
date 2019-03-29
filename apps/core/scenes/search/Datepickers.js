// @flow

import * as React from 'react';
import { Platform } from 'react-native';
import { TripInput } from '@kiwicom/margarita-components';
import {
  Icon,
  StyleSheet,
  RangeDatePicker,
} from '@kiwicom/universal-components';
import { format } from 'date-fns';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  withLayoutContext,
  LAYOUT,
  type LayoutContextState,
} from '@kiwicom/margarita-utils';
import {
  BASIC_ISO_DATE_FORMAT,
  TRIP_TYPES,
  type TripTypes,
} from '@kiwicom/margarita-config';

import { withSearchContext, type SearchContextState } from './SearchContext';
import PickersWrapper from './PickersWrapper';

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
  isDatePickerVisible: boolean,
  selectDate: $Keys<typeof DATEPICKER_MODE> | null,
|};

const DATEPICKER_MODE = {
  DEPARTURE: 'DEPARTURE',
  RETURN: 'RETURN',
};

class Datepickers extends React.Component<Props, State> {
  state = {
    isDatePickerVisible: false,
    selectDate: null,
  };

  handleDepartureDatePress = () => {
    this.setState({
      isDatePickerVisible: true,
      selectDate: DATEPICKER_MODE.DEPARTURE,
    });
  };

  handleReturnDatePress = () => {
    this.setState({
      isDatePickerVisible: true,
      selectDate: DATEPICKER_MODE.RETURN,
    });
  };

  handleDatePickerDismiss = () => {
    this.setState({
      isDatePickerVisible: false,
    });
  };

  handleDateChange = (dates: Array<Date>) => {
    const { selectDate } = this.state;
    const {
      tripType,
      setDepartureDate,
      setReturnDate,
      setTripType,
    } = this.props;

    switch (selectDate) {
      case DATEPICKER_MODE.DEPARTURE:
        setDepartureDate(...dates);
        break;
      case DATEPICKER_MODE.RETURN:
<<<<<<< HEAD
        setReturnDate(date);
        if (tripType === TRIP_TYPES.ONEWAY) {
          setTripType(TRIP_TYPES.RETURN);
||||||| merged common ancestors
        setReturnDate(date);
        if (tripType === 'oneWay') {
          setTripType('return');
=======
        setReturnDate(...dates);
        if (tripType === 'oneWay') {
          setTripType('return');
>>>>>>> Implement possibility of picking range dates
        }
        break;
      default:
        break;
    }
    this.handleDatePickerDismiss();
  };

  getDateNames = (dates: ?Array<Date>) => {
    if (Array.isArray(dates)) {
      return dates.reduce((acc, date, index) => {
        if (date) {
          const prefix = index > 0 ? ',' : '';
          return `${acc}${prefix} ${format(date, BASIC_ISO_DATE_FORMAT)}`;
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
    const showReturnInput = tripType === TRIP_TYPES.RETURN || Platform.OS === 'web';
    const returnType = tripType === TRIP_TYPES.RETURN;
    const datePickerDates =
      this.state.selectDate === DATEPICKER_MODE.DEPARTURE
        ? [dateFrom, dateTo]
        : [returnDateFrom, returnDateTo];
    return (
      <>
        <PickersWrapper layout={layout}>
          <TripInput
            style={rowLayout && styles.rowInput}
            onPress={this.handleDepartureDatePress}
            label="Departure"
            icon={<Icon name="calendar" />}
            value={this.getDateNames([dateFrom, dateTo])}
          />
          {showReturnInput && (
            <TripInput
              onPress={this.handleReturnDatePress}
              label={returnType ? TRIP_TYPES.RETURN : ''}
              icon={<Icon name="calendar" />}
              value={
                returnType
                  ? this.getDateNames([returnDateFrom, returnDateTo])
                  : 'No return'
              }
            />
          )}
        </PickersWrapper>
        <RangeDatePicker
          isVisible={this.state.isDatePickerVisible}
          dates={datePickerDates}
          onConfirm={this.handleDateChange}
          onDismiss={this.handleDatePickerDismiss}
          labels={{ cancel: 'Cancel', confirm: 'OK' }}
          numberOfRenderedMonths={12}
          weekStartsOn={1}
        />
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
