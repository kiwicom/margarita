// @flow

import * as React from 'react';
import {
  Modal,
  Select,
  TripTypeButton,
  TripTypeSwitch,
} from '@kiwicom/margarita-components';
import { Platform } from 'react-native';
import {
  LAYOUT,
  withLayoutContext,
  type LayoutContextState,
} from '@kiwicom/margarita-device';
import { TRIP_TYPES } from '@kiwicom/margarita-config';
import { StyleSheet } from '@kiwicom/universal-components';

import { TRIP_TYPE } from '../../scenes/search/SearchConstants';
import {
  withSearchContext,
  type SearchContextState,
} from '../../contexts/searchContext';

type Props = {|
  +tripType: string,
  +layout: number,
  +setTripType: string => void,
  +onParamsUpdate: () => void,
|};

type State = {|
  +showTripTypeModal: boolean,
|};

class TripTypeSelect extends React.Component<Props, State> {
  state = {
    showTripTypeModal: false,
  };

  handleTripTypeSelect = async (type: string) => {
    if (type === TRIP_TYPES.RETURN || type === TRIP_TYPES.ONEWAY) {
      await this.props.setTripType(type);
      this.props.onParamsUpdate();
    }
  };

  toggleTripTypeModal = () =>
    this.setState(state => ({ showTripTypeModal: !state.showTripTypeModal }));

  render() {
    const { tripType, layout } = this.props;
    const desktopLayout = layout >= LAYOUT.desktop;
    return (
      <>
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
        <Modal
          isVisible={this.state.showTripTypeModal}
          onClose={this.toggleTripTypeModal}
        >
          <Select
            optionsData={TRIP_TYPE}
            selectedType={tripType}
            onSelect={this.handleTripTypeSelect}
            onClosePress={this.toggleTripTypeModal}
          />
        </Modal>
      </>
    );
  }
}

const styles = StyleSheet.create({
  flexTripTypeSwitch: {
    flex: 1,
  },
});

const layoutSelect = ({ layout }: LayoutContextState) => ({
  layout,
});

const select = ({
  tripType,
  actions: { setTripType },
}: SearchContextState) => ({
  tripType,
  setTripType,
});

export default withLayoutContext(layoutSelect)(
  withSearchContext(select)(TripTypeSelect),
);
