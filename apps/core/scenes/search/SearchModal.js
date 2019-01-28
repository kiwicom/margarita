// @flow

import * as React from 'react';
import { Modal, Select, PassengersInputs } from '@kiwicom/margarita-components';

import { TRIP_TYPE, MODAL_TYPE } from './SearchConstants';
import {
  withSearchContext,
  type SearchContextState,
  type TripTypes,
  type ModalTypes,
  type PassengersData,
} from './SearchContext';

type Props = {|
  +onClose: () => void,
  +modalType: $Keys<typeof MODAL_TYPE>,
  +tripType: string,
  +setTripType: TripTypes => void,
  +handlePassengersSave: PassengersData => void,
  +setModalType: ModalTypes => void,
  ...$ReadOnly<PassengersData>,
  +setPassengerData: ($ReadOnly<PassengersData>) => void,
|};

class SearchModal extends React.Component<Props> {
  onClose = () => {
    this.props.setModalType(MODAL_TYPE.HIDDEN);
  };

  handleTripTypeSelect = (type: string) => {
    switch (type) {
      case 'return':
      case 'oneWay':
        this.props.setTripType(type);
        break;
      default:
        break;
    }
    this.onClose();
  };

  handlePassengersSave = (passengersData: $ReadOnly<PassengersData>) => {
    this.props.setPassengerData(passengersData);
    this.onClose();
  };

  render() {
    return (
      <Modal visible={this.props.modalType !== 'HIDDEN'} onClose={this.onClose}>
        {this.props.modalType === 'TRIP_TYPE' && (
          <Select
            optionsData={TRIP_TYPE}
            selectedType={this.props.tripType}
            onSelect={this.handleTripTypeSelect}
            onClosePress={this.onClose}
          />
        )}
        {this.props.modalType === 'PASSENGERS' && (
          <PassengersInputs
            adults={this.props.adults}
            infants={this.props.infants}
            bags={this.props.bags}
            onClosePress={this.onClose}
            onSavePress={this.handlePassengersSave}
          />
        )}
      </Modal>
    );
  }
}

const select = ({
  tripType,
  modalType,
  adults,
  infants,
  bags,
  actions: { setTripType, setModalType, setPassengerData },
}: SearchContextState) => ({
  tripType,
  modalType,
  adults,
  infants,
  bags,
  setTripType,
  setModalType,
  setPassengerData,
});

export default withSearchContext(select)(SearchModal);
