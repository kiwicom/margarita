// @flow

import * as React from 'react';
import {
  Modal,
  PassengersInputs,
  PassengersButton,
} from '@kiwicom/margarita-components';

import {
  type SearchContextState,
  withSearchContext,
  type Passengers,
} from '../../contexts/searchContext';

type Props = {|
  +adults: number,
  +infants: number,
  +setPassengerData: ($ReadOnly<Passengers>) => void,
  +onParamsUpdate: () => void,
|};

type State = {|
  +showPassengerModal: boolean,
|};

class PassengersModal extends React.Component<Props, State> {
  state = {
    showPassengerModal: false,
  };

  handlePassengersSave = async (passengersData: $ReadOnly<Passengers>) => {
    await this.props.setPassengerData(passengersData);
    this.props.onParamsUpdate();
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
