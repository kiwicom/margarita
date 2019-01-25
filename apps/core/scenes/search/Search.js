// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Button } from '@kiwicom/universal-components';
import {
  PassengersButton,
  TripTypeButton,
  Illustration,
} from '@kiwicom/margarita-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  withNavigation,
  Routes,
  type Navigation,
} from '@kiwicom/margarita-navigation';
import * as DateFNS from 'date-fns';

import Placepickers from './Placepickers';
import Datepickers from './Datepickers';
import SearchModal from './SearchModal';
import { TRIP_TYPE, MODAL_TYPE } from './SearchConstants';

type PassengersData = {|
  adults: number,
  infants: number,
  bags: number,
|};

type Props = {
  +navigation: Navigation,
};
/**
 * TODO: FlowFix
 *
 * Figure out how to use $Keys<typeof TRIP_TYPE> for tripType
 * and keep Select component universal at the same time
 */
type State = {|
  modalType: $Keys<typeof MODAL_TYPE>,
  travelFrom: string,
  travelTo: string,
  dateFrom: Date,
  dateTo: Date,
  returnDateFrom: Date,
  returnDateTo: Date,
  tripType: string,
  datePickerVisible: boolean,
  datePickerDate: Date,
  ...PassengersData,
|};

const getFormatedDate = date => {
  return DateFNS.format(date, 'YYYY-MM-DD');
};

class Search extends React.Component<Props, State> {
  static navigationOptions = ({ navigation }: any) => ({
    header: null,
  });

  constructor(props: Props) {
    super(props);

    const defaultDepartureDate = new Date();
    const defaultReturnDate = DateFNS.addDays(defaultDepartureDate, 2);

    this.state = {
      modalType: MODAL_TYPE.HIDDEN,
      travelFrom: 'OSL',
      travelTo: 'PRG',
      dateFrom: defaultDepartureDate,
      dateTo: defaultDepartureDate,
      returnDateFrom: defaultReturnDate,
      returnDateTo: defaultReturnDate,
      tripType: Object.keys(TRIP_TYPE)[0],
      datePickerVisible: false,
      datePickerDate: defaultDepartureDate,
      adults: 1,
      infants: 0,
      bags: 0,
    };
  }

  handleSubmitPress = () => {
    const {
      travelFrom,
      travelTo,
      dateFrom,
      dateTo,
      returnDateFrom,
      returnDateTo,
      tripType,
    } = this.state;
    this.props.navigation.navigate(Routes.RESULTS, {
      travelFrom,
      travelTo,
      dateFrom: getFormatedDate(dateFrom),
      dateTo: getFormatedDate(dateTo),
      ...(tripType === 'return'
        ? {
            returnDateFrom: getFormatedDate(returnDateFrom),
            returnDateTo: getFormatedDate(returnDateTo),
          }
        : {}),
    });
  };

  goToPlacePicker = () => {
    this.props.navigation.navigate(Routes.PLACE_PICKER);
  };

  handleTripTypeSelect = (type: string) => {
    this.setState({ tripType: type, modalType: MODAL_TYPE.HIDDEN });
  };

  handleTripTypePress = () => {
    this.setState({ modalType: MODAL_TYPE.TRIP_TYPE });
  };

  handlePassengersSave = (passengersData: $ReadOnly<PassengersData>) => {
    this.setState({ ...passengersData, modalType: MODAL_TYPE.HIDDEN });
  };

  handlePassengersPress = () => {
    this.setState({ modalType: MODAL_TYPE.PASSENGERS });
  };

  handlePlacePress = () => {
    console.log('TODO: place select'); // eslint-disable-line no-console
  };

  handlePlaceSwitchPress = () => {
    this.setState(prevState => {
      const { travelFrom, travelTo } = prevState;
      return {
        travelFrom: travelTo,
        travelTo: travelFrom,
      };
    });
  };

  setDepartureDate = (date: Date) => {
    this.setState(prevState => {
      const returnDate = DateFNS.max(prevState.returnDateFrom, date);
      return {
        dateFrom: date,
        dateTo: date,
        returnDateFrom: returnDate,
        returnDateTo: returnDate,
        datePickerVisible: false,
      };
    });
  };

  setReturnDate = (date: Date) => {
    this.setState(prevState => {
      const departureDate = DateFNS.min(prevState.returnDateFrom, date);
      return {
        dateFrom: departureDate,
        dateTo: departureDate,
        returnDateFrom: date,
        returnDateTo: date,
        datePickerVisible: false,
      };
    });
  };

  handleModalClose = () => {
    this.setState({ modalType: MODAL_TYPE.HIDDEN });
  };

  render() {
    const {
      modalType,
      travelFrom,
      travelTo,
      dateFrom,
      returnDateFrom,
      tripType,
      adults,
      infants,
      bags,
    } = this.state;
    return (
      <>
        <View style={styles.container}>
          <View style={styles.form}>
            <Illustration name="Boarding" style={styles.boardingIllustration} />
            <View style={styles.top}>
              <TripTypeButton
                onPress={this.handleTripTypePress}
                icon={TRIP_TYPE[tripType].icon}
                label={TRIP_TYPE[tripType].label}
              />
              <View style={styles.hSpacer} />
              <PassengersButton
                onPress={this.handlePassengersPress}
                passengers={adults + infants}
                bags={bags}
              />
            </View>
            <Placepickers
              travelFrom={travelFrom}
              travelTo={travelTo}
              handlePlacePress={this.handlePlacePress}
              handlePlaceSwitchPress={this.handlePlaceSwitchPress}
            />
            <Datepickers
              tripType={tripType}
              dateFrom={dateFrom}
              returnDateFrom={returnDateFrom}
              setDepartureDate={this.setDepartureDate}
              setReturnDate={this.setReturnDate}
            />
            <View style={styles.bottom}>
              <Button onPress={this.handleSubmitPress} label="Search" />
            </View>
          </View>
        </View>
        <SearchModal
          onClose={this.handleModalClose}
          modalType={modalType}
          tripType={tripType}
          handleTripTypeSelect={this.handleTripTypeSelect}
          adults={adults}
          infants={infants}
          bags={bags}
          handlePassengersSave={this.handlePassengersSave}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    web: {
      overflowY: 'auto',
      justifyContent: 'flex-start',
    },
  },
  form: {
    width: '100%',
    maxWidth: 500,
    marginBottom: 100,
    padding: parseInt(defaultTokens.spaceXSmall, 10),
  },
  hSpacer: {
    width: parseInt(defaultTokens.spaceXSmall, 10),
  },
  top: {
    flexDirection: 'row',
    marginBottom: parseInt(defaultTokens.spaceMedium, 10),
  },
  bottom: {
    marginTop: parseInt(defaultTokens.spaceXSmall, 10),
  },
  boardingIllustration: {
    marginBottom: 20,
    web: {
      marginTop: 20,
    },
  },
});

export default withNavigation(Search);
