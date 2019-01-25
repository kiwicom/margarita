// @flow

import * as React from 'react';
import { Modal, Select, PassengersInputs } from '@kiwicom/margarita-components';

import { TRIP_TYPE, MODAL_TYPE } from './SearchConstants';

type PassengersData = {|
  +adults: number,
  +infants: number,
  +bags: number,
|};

type Props = {|
  +onClose: () => void,
  +modalType: $Keys<typeof MODAL_TYPE>,
  +tripType: string,
  +handleTripTypeSelect: string => void,
  +handlePassengersSave: PassengersData => void,
  ...PassengersData,
|};

export default function SearchModal(props: Props) {
  return (
    <Modal visible={props.modalType !== 'HIDDEN'} onClose={props.onClose}>
      {props.modalType === 'TRIP_TYPE' && (
        <Select
          optionsData={TRIP_TYPE}
          selectedType={props.tripType}
          onSelect={props.handleTripTypeSelect}
          onClosePress={props.onClose}
        />
      )}
      {props.modalType === 'PASSENGERS' && (
        <PassengersInputs
          adults={props.adults}
          infants={props.infants}
          bags={props.bags}
          onClosePress={props.onClose}
          onSavePress={props.handlePassengersSave}
        />
      )}
    </Modal>
  );
}
