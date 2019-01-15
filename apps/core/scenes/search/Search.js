// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  Button,
  Icon,
  DatePicker,
} from '@kiwicom/universal-components';
import {
  TripInput,
  Select,
  PassengersInputs,
  Modal,
  PassengersButton,
  TripTypeButton,
  TouchableWithoutFeedback,
  SearchIllustration,
} from '@kiwicom/margarita-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  withNavigation,
  Routes,
  type Navigation,
} from '@kiwicom/margarita-navigation';
import * as DateFNS from 'date-fns';

const TRIP_TYPE = {
  return: {
    icon: 'flight-return',
    label: 'Return',
  },
  oneWay: {
    icon: 'flight-direct',
    label: 'One way',
  },
};

const MODAL_TYPE = {
  HIDDEN: 'HIDDEN',
  TRIP_TYPE: 'TRIP_TYPE',
  PASSENGERS: 'PASSENGERS',
};

const DATEPICKER_MODE = {
  DEPARTURE: 'DEPARTURE',
  RETURN: 'RETURN',
};

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
  datePickerMode: $Keys<typeof DATEPICKER_MODE>,
  ...PassengersData,
|};

const getFormatedDate = date => {
  return DateFNS.format(date, 'YYYY-MM-DD');
};

class Search extends React.Component<Props, State> {
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
      datePickerMode: DATEPICKER_MODE.DEPARTURE,
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

  handlePassengersSave = (passengersData: PassengersData) => {
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

  handleDepartureDatePress = () => {
    const { dateFrom } = this.state;
    this.setState({
      datePickerVisible: true,
      datePickerDate: dateFrom,
      datePickerMode: DATEPICKER_MODE.DEPARTURE,
    });
  };

  handleReturnDatePress = () => {
    const { returnDateFrom } = this.state;
    this.setState({
      datePickerVisible: true,
      datePickerDate: returnDateFrom,
      datePickerMode: DATEPICKER_MODE.RETURN,
    });
  };

  handleDateChange = date => {
    const { datePickerMode } = this.state;

    switch (datePickerMode) {
      case DATEPICKER_MODE.DEPARTURE:
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
        break;
      case DATEPICKER_MODE.RETURN:
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
        break;
      default:
        this.setState({ datePickerVisible: false });
        break;
    }
  };

  handleDatePickerDismiss = () => {
    this.setState({ datePickerVisible: false });
  };

  handleModalClose = () => {
    this.setState({ modalType: MODAL_TYPE.HIDDEN });
  };

  renderModalContent = () => {
    const { modalType, tripType, adults, infants, bags } = this.state;
    switch (modalType) {
      case MODAL_TYPE.TRIP_TYPE:
        return (
          <Select
            optionsData={TRIP_TYPE}
            selectedType={tripType}
            onSelect={this.handleTripTypeSelect}
            onClosePress={this.handleModalClose}
          />
        );
      case MODAL_TYPE.PASSENGERS:
        return (
          <PassengersInputs
            adults={adults}
            infants={infants}
            bags={bags}
            onClosePress={this.handleModalClose}
            onSavePress={this.handlePassengersSave}
          />
        );
      default:
        return null;
    }
  };

  render() {
    const {
      modalType,
      travelFrom,
      travelTo,
      dateFrom,
      returnDateFrom,
      tripType,
      datePickerVisible,
      datePickerDate,
      adults,
      infants,
      bags,
    } = this.state;
    return (
      <>
        <View style={styles.container}>
          <View style={styles.form}>
            <SearchIllustration />
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
            <View>
              <TripInput
                onPress={this.handlePlacePress}
                label="From"
                icon={<Icon name="airplane-takeoff" />}
                value={travelFrom}
              />
              <TouchableWithoutFeedback onPress={this.handlePlaceSwitchPress}>
                <View style={styles.placeSwitch}>
                  <Icon name="replace" color="#7F91A8" />
                </View>
              </TouchableWithoutFeedback>
              <TripInput
                onPress={this.handlePlacePress}
                label="To"
                icon={<Icon name="airplane-landing" />}
                value={travelTo}
              />
            </View>
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
            <View style={styles.bottom}>
              <Button onPress={this.handleSubmitPress} label="Search" />
            </View>
          </View>
        </View>
        <Modal
          visible={modalType !== MODAL_TYPE.HIDDEN}
          onClose={this.handleModalClose}
        >
          {this.renderModalContent()}
        </Modal>
        <DatePicker
          isVisible={datePickerVisible}
          mode={'date'}
          date={datePickerDate}
          minDate={DateFNS.startOfDay(new Date())}
          onConfirm={this.handleDateChange}
          onDismiss={this.handleDatePickerDismiss}
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
  placeSwitch: {
    position: 'absolute',
    zIndex: 1,
    right: 18,
    top: '50%',
    marginTop: -20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: defaultTokens.paletteWhite,
    width: parseInt(defaultTokens.widthIconLarge, 10),
    height: parseInt(defaultTokens.heightIconLarge, 10),
    borderRadius: parseInt(defaultTokens.widthIconLarge, 10) * 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    android: {
      elevation: 3,
    },
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
});

export default withNavigation(Search);
