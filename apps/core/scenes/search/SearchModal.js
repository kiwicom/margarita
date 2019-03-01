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
  type Location,
} from './SearchContext';
import PlacePicker from '../../components/PlacePicker/PlacePickerRenderer';

type Props = {|
  +onClose: () => void,
  +modalType: $Keys<typeof MODAL_TYPE>,
  +tripType: string,
  +travelFrom: ?Location,
  +travelTo: ?Location,
  +setTripType: TripTypes => void,
  +handlePassengersSave: PassengersData => void,
  +setModalType: ModalTypes => void,
  ...$ReadOnly<PassengersData>,
  +setPassengerData: ($ReadOnly<PassengersData>) => void,
  +setTravelTo: Location => void,
  +setTravelFrom: Location => void,
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

  getDefaultPlace = () => {
    const { modalType, travelFrom, travelTo } = this.props;
    switch (modalType) {
      case MODAL_TYPE.ORIGIN:
        return travelFrom;
      case MODAL_TYPE.DESTINATION:
        return travelTo;
      default:
        return null;
    }
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
          <PlacePicker defaultPlace={this.getDefaultPlace()} />
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
  actions: {
    setModalType,
    setPassengerData,
    setTripType,
    setTravelTo,
    setTravelFrom,
  },
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
  setTravelTo,
  setTravelFrom,
});

export default withSearchContext(select)(SearchModal);
