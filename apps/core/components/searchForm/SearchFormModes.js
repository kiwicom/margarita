// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { StyleSheet } from '@kiwicom/universal-components';
import {
  PassengersButton,
  TripTypeButton,
  TripTypeSwitch,
} from '@kiwicom/margarita-components';
import {
  withLayoutContext,
  LAYOUT,
  type LayoutContextState,
} from '@kiwicom/margarita-device';
import { TRIP_TYPES } from '@kiwicom/margarita-config';

import {
  withSearchContext,
  type SearchContextState,
  type PassengersData,
} from '../../scenes/search/SearchContext';
import {
  TRIP_TYPE,
  FORM_MODE,
  type FormMode,
} from '../../scenes/search/SearchConstants';
import TripTypeSelect from './TripTypeSelect';
import PassengersModal from './PassengersModal';

type Props = {|
  +tripType: string,
  ...$ReadOnly<PassengersData>,
  +setPassengerData: ($ReadOnly<PassengersData>) => void,
  +layout: number,
  +setTripType: string => void,
|};

type State = {|
  +showTripTypeModal: boolean,
  +showPassengerModal: boolean,
  +formMode: FormMode,
|};

class SearchFormModes extends React.Component<Props, State> {
  state = {
    showTripTypeModal: false,
    showPassengerModal: false,
    formMode: FORM_MODE.TRIP_TYPE,
  };

  handlePassengersSave = (passengersData: $ReadOnly<PassengersData>) => {
    this.props.setPassengerData(passengersData);
    this.togglePassengerModal();
  };

  handleTripTypeSelect = (type: string) => {
    if (type === TRIP_TYPES.RETURN || type === TRIP_TYPES.ONEWAY) {
      this.props.setTripType(type);
      this.toggleTripTypeModal();
    }
  };

  toggleTripTypeModal = () =>
    this.setState(state => ({ showTripTypeModal: !state.showTripTypeModal }));

  togglePassengerModal = () =>
    this.setState(state => ({ showPassengerModal: !state.showPassengerModal }));

  render() {
    const { tripType, adults, infants, bags, layout } = this.props;
    const desktopLayout = layout >= LAYOUT.desktop;

    return (
      <View style={styles.container}>
        {Platform.OS === 'web' ? (
          <TripTypeSwitch
            style={!desktopLayout && styles.flexTripTypeSwitch}
            optionsData={TRIP_TYPE}
            selectedType={tripType}
            onSelect={this.handleTripTypeSelect}
          />
        ) : (
          <TripTypeButton
            onPress={this.toggleTripTypeModal}
            icon={TRIP_TYPE[tripType].icon}
            label={TRIP_TYPE[tripType].label}
          />
        )}
        <View style={styles.hSpacer} />
        <PassengersButton
          onPress={this.togglePassengerModal}
          adults={adults}
          infants={infants}
          bags={bags}
        />
        <TripTypeSelect
          isVisible={this.state.showTripTypeModal}
          onClose={this.toggleTripTypeModal}
          handleTripTypeSelect={this.handleTripTypeSelect}
        />
        <PassengersModal
          isVisible={this.state.showPassengerModal}
          onClose={this.togglePassengerModal}
          handlePassengersSave={this.handlePassengersSave}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: parseInt(defaultTokens.spaceMedium, 10),
    web: {
      marginBottom: parseInt(defaultTokens.spaceSmall, 10),
    },
  },
  hSpacer: {
    width: parseInt(defaultTokens.spaceXSmall, 10),
  },
  flexTripTypeSwitch: {
    flex: 1,
  },
});

const layoutSelect = ({ layout }: LayoutContextState) => ({
  layout,
});

const select = ({
  tripType,
  adults,
  infants,
  bags,
  actions: { setTripType, setPassengerData },
}: SearchContextState) => ({
  tripType,
  adults,
  infants,
  bags,
  setTripType,
  setPassengerData,
});

export default withLayoutContext(layoutSelect)(
  withSearchContext(select)(SearchFormModes),
);
