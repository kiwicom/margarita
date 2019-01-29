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
import format from 'date-fns/format';

import {
  withSearchContext,
  type SearchContextState,
  type TripTypes,
  type ModalTypes,
} from './SearchContext';
import Placepickers from './Placepickers';
import Datepickers from './Datepickers';
import SearchModal from './SearchModal';
import { TRIP_TYPE, MODAL_TYPE, DATE_FORMAT } from './SearchConstants';

type Props = {
  +navigation: Navigation,
  +travelFrom: string,
  +travelTo: string,
  +dateFrom: Date,
  +dateTo: Date,
  +returnDateFrom: Date,
  +returnDateTo: Date,
  +tripType: string,
  +setTripType: TripTypes => void,
  +setModalType: ModalTypes => void,
  +adults: number,
  +infants: number,
  +bags: number,
};

class Search extends React.Component<Props> {
  static navigationOptions = ({ navigation }: any) => ({
    header: null,
  });

  handleSubmitPress = () => {
    const {
      travelFrom,
      travelTo,
      dateFrom,
      dateTo,
      returnDateFrom,
      returnDateTo,
      tripType,
    } = this.props;
    this.props.navigation.navigate(Routes.RESULTS, {
      travelFrom,
      travelTo,
      dateFrom: format(dateFrom, DATE_FORMAT),
      dateTo: format(dateTo, DATE_FORMAT),
      ...(tripType === 'return'
        ? {
            returnDateFrom: format(returnDateFrom, DATE_FORMAT),
            returnDateTo: format(returnDateTo, DATE_FORMAT),
          }
        : {}),
    });
  };

  goToPlacePicker = () => {
    this.props.navigation.navigate(Routes.PLACE_PICKER);
  };

  handleTripTypePress = () => {
    this.props.setModalType(MODAL_TYPE.TRIP_TYPE);
  };

  handlePassengersPress = () => {
    this.props.setModalType(MODAL_TYPE.PASSENGERS);
  };

  render() {
    const { tripType, adults, infants, bags } = this.props;
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

            <Placepickers />
            <Datepickers />

            <View style={styles.bottom}>
              <Button onPress={this.handleSubmitPress} label="Search" />
            </View>
          </View>
        </View>
        <SearchModal />
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

const select = ({
  travelFrom,
  travelTo,
  dateFrom,
  dateTo,
  returnDateFrom,
  returnDateTo,
  tripType,
  adults,
  infants,
  bags,
  actions: { setTripType, setModalType },
}: SearchContextState) => ({
  travelFrom,
  travelTo,
  dateFrom,
  dateTo,
  returnDateFrom,
  returnDateTo,
  tripType,
  adults,
  infants,
  bags,
  setTripType,
  setModalType,
});

export default withNavigation(withSearchContext(select)(Search));
