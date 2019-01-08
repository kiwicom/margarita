// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  TextInput,
  Button,
  Icon,
} from '@kiwicom/universal-components';
import {
  TripInput,
  Select,
  PassengersInputs,
  Modal,
} from '@kiwicom/margarita-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  withNavigation,
  Routes,
  type Navigation,
} from '@kiwicom/margarita-navigation';

const TRIP_TYPE = {
  oneWay: {
    icon: 'flight-direct',
    label: 'One way',
  },
  return: {
    icon: 'flight-return',
    label: 'Return',
  },
};

const MODAL_TYPE = {
  HIDDEN: 'HIDDEN',
  TRIP_TYPE: 'TRIP_TYPE',
  PASSENGERS: 'PASSENGERS',
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
  dateFrom: string,
  dateTo: string,
  tripType: string,
  ...PassengersData,
|};

class Search extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      modalType: MODAL_TYPE.HIDDEN,
      travelFrom: 'OSL',
      travelTo: 'PRG',
      dateFrom: '2018-12-30',
      dateTo: '2018-12-31',
      tripType: Object.keys(TRIP_TYPE)[0],
      adults: 1,
      infants: 0,
      bags: 0,
    };
  }

  handleTravelFromChange = (value: string) =>
    this.setState({ travelFrom: value });

  handleTravelToChange = (value: string) => this.setState({ travelTo: value });
  handleDateFromChange = (value: string) => this.setState({ dateFrom: value });
  handleDateToChange = (value: string) => this.setState({ dateTo: value });
  handleSubmitPress = () => {
    const { travelFrom, travelTo, dateFrom, dateTo } = this.state;
    this.props.navigation.navigate(Routes.RESULTS, {
      travelFrom,
      travelTo,
      dateFrom,
      dateTo,
    });
  };

  goToPlacePicker = () => {
    this.props.navigation.navigate(Routes.PLACE_PICKER);
  };

  todo = () => {
    console.warn('TODO'); // eslint-disable-line no-console
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
      dateTo,
      tripType,
      adults,
      infants,
      bags,
    } = this.state;
    return (
      <>
        <View style={styles.form}>
          <View style={styles.formTop}>
            <Button
              type="secondary"
              leftIcon={<Icon name={TRIP_TYPE[tripType].icon} />}
              rightIcon={<Icon name="show-more" />}
              onPress={this.handleTripTypePress}
              label={TRIP_TYPE[tripType].label}
            />
            <Button
              type="secondary"
              width={120}
              leftIcon={<Icon name="passengers" />}
              rightIcon={<Icon name="baggage-set" />}
              onPress={this.handlePassengersPress}
              label={`${adults + infants} | ${bags}`}
            />
          </View>
          <TripInput
            onPress={this.todo}
            label="From"
            icon={<Icon name="airplane-landing" />}
            value={travelFrom}
          />
          <TextInput
            style={styles.input}
            onChangeText={this.handleTravelToChange}
            value={travelTo}
          />
          <TextInput
            style={styles.input}
            onChangeText={this.handleDateFromChange}
            value={dateFrom}
          />
          <TextInput
            style={styles.input}
            onChangeText={this.handleDateToChange}
            value={dateTo}
          />
          <Button onPress={this.handleSubmitPress} label="Search" />
          <Button onPress={this.goToPlacePicker} label="PlacePicker" />
        </View>
        <Modal
          visible={modalType !== MODAL_TYPE.HIDDEN}
          onClose={this.handleModalClose}
        >
          {this.renderModalContent()}
        </Modal>
      </>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    maxWidth: 500,
    padding: 8,
  },
  formTop: {
    flexDirection: 'row',
    marginBottom: parseInt(defaultTokens.marginButtonIconNormal, 10),
  },
  input: {
    borderWidth: 1,
    borderColor: '#bbbbbb',
    margin: 5,
    padding: 5,
  },
});

export default withNavigation(Search);
