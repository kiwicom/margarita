// @flow

import * as React from 'react';
import {
  Modal,
  PassengersInputs,
  PassengersButton,
} from '@kiwicom/margarita-components';

import {
  withSearchContext,
  type SearchContextState,
  type PassengersData,
} from '../../scenes/search/SearchContext';

type Props = {|
  +adults: number,
  +infants: number,
  +bags: number,
  +setPassengerData: ($ReadOnly<PassengersData>) => void,
|};

type State = {|
  +showPassengerModal: boolean,
|};

class PassengersModal extends React.Component<Props, State> {
  state = {
    showPassengerModal: false,
  };

  handlePassengersSave = (passengersData: $ReadOnly<PassengersData>) => {
    this.props.setPassengerData(passengersData);
    this.togglePassengerModal();
  };

  togglePassengerModal = () =>
    this.setState(state => ({ showPassengerModal: !state.showPassengerModal }));

  render() {
    const { adults, infants, bags } = this.props;
    return (
      <>
        <PassengersButton
          onPress={this.togglePassengerModal}
          adults={adults}
          infants={infants}
          bags={bags}
        />
        <Modal
          isVisible={this.state.showPassengerModal}
          onClose={this.togglePassengerModal}
        >
          <PassengersInputs
            adults={adults}
            infants={infants}
            bags={bags}
            onSavePress={this.handlePassengersSave}
            onClosePress={this.togglePassengerModal}
          />
        </Modal>
      </>
    );
  }
}

const select = ({
  adults,
  infants,
  bags,
  actions: { setPassengerData },
}: SearchContextState) => ({
  adults,
  infants,
  bags,
  setPassengerData,
});

export default withSearchContext(select)(PassengersModal);
