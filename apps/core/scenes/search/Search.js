// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  TextInput,
  Button,
  Icon,
  Text,
} from '@kiwicom/universal-components';
import { TripInput, Select, Modal } from '@kiwicom/margarita-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Routes from '../../config/routes';

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

/**
 * TODO: FlowFix
 *
 * Figure out how to use $Keys<typeof TRIP_TYPE> for tripType
 * and keep Select component universal at the same time
 */
type State = {|
  travelFrom: string,
  travelTo: string,
  dateFrom: string,
  dateTo: string,
  tripType: string,
  modalType: $Keys<typeof MODAL_TYPE>,
|};
type Props = Object;

export default class Search extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      travelFrom: 'OSL',
      travelTo: 'PRG',
      dateFrom: '2018-12-30',
      dateTo: '2018-12-31',
      tripType: Object.keys(TRIP_TYPE)[0],
      modalType: MODAL_TYPE.HIDDEN,
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

  handlePassengersPress = () => {
    this.setState({ modalType: MODAL_TYPE.PASSENGERS });
  };

  handleModalClose = () => {
    this.setState({ modalType: MODAL_TYPE.HIDDEN });
  };

  renderModalContent = () => {
    const { tripType, modalType } = this.state;
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
        return <Text>TODO: Passengers</Text>;
      default:
        return null;
    }
  };

  render() {
    const {
      travelFrom,
      travelTo,
      dateFrom,
      dateTo,
      tripType,
      modalType,
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
            >
              {TRIP_TYPE[tripType].label}
            </Button>
            <Button
              type="secondary"
              width={110}
              onPress={this.handlePassengersPress}
            >
              Passengers
            </Button>
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
          <Button onPress={this.handleSubmitPress}>Search</Button>
          <Button onPress={this.goToPlacePicker}>PlacePicker</Button>
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
