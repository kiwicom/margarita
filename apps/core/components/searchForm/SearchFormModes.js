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
import { type TripTypes, TRIP_TYPES } from '@kiwicom/margarita-config';

import {
  withSearchContext,
  type SearchContextState,
  type ModalTypes,
} from '../../scenes/search/SearchContext';
import { MODAL_TYPE, TRIP_TYPE } from '../../scenes/search/SearchConstants';

type Props = {|
  +tripType: string,
  +adults: number,
  +infants: number,
  +bags: number,
  +setTripType: TripTypes => void,
  +setModalType: ModalTypes => void,
  +layout: number,
|};

class SearchFormModes extends React.Component<Props> {
  handleTripTypeSelect = (type: TripTypes) => {
    if (type === TRIP_TYPES.RETURN || type === TRIP_TYPES.ONEWAY) {
      this.props.setTripType(type);
    }
  };

  handleTripTypePress = () => {
    this.props.setModalType(MODAL_TYPE.TRIP_TYPE);
  };

  handlePassengersPress = () => {
    this.props.setModalType(MODAL_TYPE.PASSENGERS);
  };

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
            onPress={this.handleTripTypePress}
            icon={TRIP_TYPE[tripType].icon}
            label={TRIP_TYPE[tripType].label}
          />
        )}
        <View style={styles.hSpacer} />
        <PassengersButton
          onPress={this.handlePassengersPress}
          adults={adults}
          infants={infants}
          bags={bags}
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
  actions: { setTripType, setModalType },
}: SearchContextState) => ({
  tripType,
  adults,
  infants,
  bags,
  setTripType,
  setModalType,
});

export default withLayoutContext(layoutSelect)(
  withSearchContext(select)(SearchFormModes),
);
