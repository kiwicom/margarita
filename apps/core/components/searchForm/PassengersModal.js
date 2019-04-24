// @flow

import * as React from 'react';
import { Modal, PassengersInputs } from '@kiwicom/margarita-components';

import {
  withSearchContext,
  type SearchContextState,
  type PassengersData,
} from '../../scenes/search/SearchContext';

type Props = {|
  +isVisible: boolean,
  +onClose: () => void,
  +handlePassengersSave: ($ReadOnly<PassengersData>) => void,
  +adults: number,
  +infants: number,
  +bags: number,
|};

class PassengersModal extends React.Component<Props> {
  render() {
    const {
      isVisible,
      onClose,
      handlePassengersSave,
      adults,
      infants,
      bags,
    } = this.props;
    return (
      <Modal isVisible={isVisible} onClose={onClose}>
        <PassengersInputs
          adults={adults}
          infants={infants}
          bags={bags}
          onSavePress={handlePassengersSave}
          onClosePress={onClose}
        />
      </Modal>
    );
  }
}

const select = ({ adults, infants, bags }: SearchContextState) => ({
  adults,
  infants,
  bags,
});

export default withSearchContext(select)(PassengersModal);
