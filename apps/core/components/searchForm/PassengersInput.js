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
} from '../../contexts/searchContext/SearchContext';

type Props = {|
  +adults: number,
  +infants: number,
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
    const { adults, infants } = this.props;
    return (
      <>
        <PassengersButton
          onPress={this.togglePassengerModal}
          adults={adults}
          infants={infants}
        />
        <Modal
          isVisible={this.state.showPassengerModal}
          onClose={this.togglePassengerModal}
        >
          <PassengersInputs
            adults={adults}
            infants={infants}
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
  actions: { setPassengerData },
}: SearchContextState) => ({
  adults,
  infants,
  setPassengerData,
});

export default withSearchContext(select)(PassengersModal);
