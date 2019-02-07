// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import { TripInput } from '@kiwicom/margarita-components';
import { Icon, DatePicker, StyleSheet } from '@kiwicom/universal-components';
import { format, startOfDay } from 'date-fns';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  withLayoutContext,
  LAYOUT,
  type LayoutContextState,
} from '@kiwicom/margarita-utils';

import {
  withSearchContext,
  type TripTypes,
  type SearchContextState,
} from './SearchContext';
import { DATE_FORMAT } from './SearchConstants';
import PickersWrapper from './PickersWrapper';

type Props = {|
  +tripType: string,
  +dateFrom: Date,
  +returnDateFrom: Date,
  +setDepartureDate: Date => void,
  +setReturnDate: Date => void,
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

  handleDateChange = (date: Date) => {
    const { selectDate } = this.state;
    const {
      tripType,
      setDepartureDate,
      setReturnDate,
      setTripType,
    } = this.props;

    switch (selectDate) {
      case DATEPICKER_MODE.DEPARTURE:
        setDepartureDate(date);
        break;
      case DATEPICKER_MODE.RETURN:
        setReturnDate(date);
        if (tripType === 'oneWay') {
          setTripType('return');
        }
        break;
      default:
        break;
    }
    this.handleDatePickerDismiss();
  };

  render() {
    const { tripType, dateFrom, returnDateFrom, layout } = this.props;
    const rowLayout = layout >= LAYOUT.largeMobile;
    const showReturnInput = tripType === 'return' || Platform.OS === 'web';
    const returnType = tripType === 'return';
    const datePickerDate =
      this.state.selectDate === DATEPICKER_MODE.DEPARTURE
        ? dateFrom
        : returnDateFrom;

    return (
      <>
        <PickersWrapper layout={layout}>
          <TripInput
            style={rowLayout && styles.rowInput}
            onPress={this.handleDepartureDatePress}
            label="Departure"
            icon={<Icon name="calendar" />}
            value={format(dateFrom, DATE_FORMAT)}
          />
          {showReturnInput && (
            <TripInput
              onPress={this.handleReturnDatePress}
              label={returnType ? 'Return' : ''}
              icon={<Icon name="calendar" />}
              value={
                returnType ? format(returnDateFrom, DATE_FORMAT) : 'No return'
              }
            />
          )}
        </PickersWrapper>
        <View style={this.state.isDatePickerVisible && styles.picker}>
          <DatePicker
            isVisible={this.state.isDatePickerVisible}
            mode={'date'}
            date={datePickerDate}
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
  returnDateFrom,
  tripType,
  actions: { setTripType, setDepartureDate, setReturnDate },
}: SearchContextState) => ({
  dateFrom,
  returnDateFrom,
  tripType,
  setTripType,
  setDepartureDate,
  setReturnDate,
});

export default withLayoutContext(layoutSelect)(
  withSearchContext(select)(Datepickers),
);
