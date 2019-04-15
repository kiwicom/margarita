// @flow

import * as React from 'react';
import { Modal, Select, PassengersInputs } from '@kiwicom/margarita-components';
import { TRIP_TYPES } from '@kiwicom/margarita-config';

import { MODAL_TYPE, TRIP_TYPE } from '../../scenes/search/SearchConstants';
import {
  withSearchContext,
  type SearchContextState,
  type ModalTypes,
  type PassengersData,
  type Location,
} from '../../scenes/search/SearchContext';
import PlacePicker from './PlacePicker/PlacePickerRenderer';

type Props = {|
  +onClose: () => void,
  +modalType: $Keys<typeof MODAL_TYPE>,
  +tripType: string,
  +travelFrom: ?Location,
  +travelTo: ?Location,
  +setTripType: string => void,
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
      case TRIP_TYPES.RETURN:
      case TRIP_TYPES.ONEWAY:
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
    const { adults, bags, infants, modalType, tripType } = this.props;

    return (
      <Modal isVisible={modalType !== MODAL_TYPE.HIDDEN} onClose={this.onClose}>
        {modalType === MODAL_TYPE.TRIP_TYPE && (
          <Select
            optionsData={TRIP_TYPE}
            selectedType={tripType}
            onSelect={this.handleTripTypeSelect}
            onClosePress={this.onClose}
          />
        )}
        {modalType === MODAL_TYPE.PASSENGERS && (
          <PassengersInputs
            adults={adults}
            infants={infants}
            bags={bags}
            onClosePress={this.onClose}
            onSavePress={this.handlePassengersSave}
          />
        )}
        {[MODAL_TYPE.ORIGIN, MODAL_TYPE.DESTINATION].includes(modalType) && (
          <PlacePicker />
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
  travelFrom,
  travelTo,
  actions: { setModalType, setPassengerData, setTripType },
}: SearchContextState) => ({
  tripType,
  modalType,
  adults,
  infants,
  bags,
  setTripType,
  setModalType,
  setPassengerData,
  travelFrom,
  travelTo,
});

export default withSearchContext(select)(SearchModal);
