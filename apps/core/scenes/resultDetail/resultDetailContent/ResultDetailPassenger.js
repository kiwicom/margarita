// @flow

import * as React from 'react';
import {
  PassengerCards,
  withAlertContext,
  type AlertContent,
  type AlertContextState,
} from '@kiwicom/margarita-components';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';

import { withSearchContext } from '../../../contexts/searchContext/SearchContext';
import type { PassengerType } from '../../../contexts/searchContext/SearchContextTypes';
import type { ResultDetailPassenger_itinerary as ResultDetailPassengerType } from './__generated__/ResultDetailPassenger_itinerary.graphql';
import PassengerForm from '../../../components/passengerForm/PassengerForm';

type Props = {|
  +itinerary: ?ResultDetailPassengerType,
  +setAlertContent: (alertContent: AlertContent | null) => void,
  +setPassengers: (Array<PassengerType>) => void,
  +passengers: PassengerType[],
|};

type State = {|
  +isFormVisible: boolean,
  +currentEditID: ?string,
|};

class ResultDetailPassenger extends React.Component<Props, State> {
  state = {
    isFormVisible: false,
    currentEditID: null,
  };

  validateForm = passenger => {
    if (!(passenger.passportId && passenger.name)) {
      return 'ID and Name are mandatory';
    }

    const existsID = !!this.props.passengers.find(
      el => el.passportId === passenger.passportId,
    );

    if (existsID && this.state.currentEditID !== passenger.id) {
      return 'A passenger with the same ID has already been added.';
    }
    return '';
  };

  getNewPassengers = passenger => {
    // If we are editing, replace the passenger, else add it
    const { currentEditID } = this.state;
    const { passengers } = this.props;
    if (currentEditID) {
      return passengers.map(el => (el.id === currentEditID ? passenger : el));
    }
    return [...passengers, passenger];
  };

  handleFormSaveRequest = passenger => {
    const errorMessage = this.validateForm(passenger);

    const { setAlertContent } = this.props;
    if (errorMessage) {
      setAlertContent({
        message: errorMessage,
      });
    } else {
      this.props.setPassengers(this.getNewPassengers(passenger));
      this.toggleModal();
    }
  };

  handleEditPassenger = (id: ?string) => {
    this.setState({ isFormVisible: true, currentEditID: id });
  };

  handleDeletePassenger = (id: ?string) => {
    this.props.setPassengers(
      this.props.passengers.filter(passenger => passenger.id !== id),
    );
  };

  toggleModal = () => {
    this.setState({ currentEditID: null });
    this.setState(state => ({ isFormVisible: !state.isFormVisible }));
  };

  render() {
    const { isFormVisible, currentEditID } = this.state;
    const { passengers } = this.props;
    const prefillData = currentEditID
      ? passengers.find(el => el.id === currentEditID)
      : null;
    return (
      <>
        <PassengerCards
          passengerCards={passengers}
          onEditPress={this.handleEditPassenger}
          onDeletePress={this.handleDeletePassenger}
          onAddPassengerPress={this.toggleModal}
        />
        <PassengerForm
          isEditing={!!currentEditID}
          prefillData={prefillData}
          isVisible={isFormVisible}
          onRequestClose={this.toggleModal}
          onRequestSave={this.handleFormSaveRequest}
          itinerary={this.props.itinerary}
        />
      </>
    );
  }
}

const selectAlertContextState = ({
  actions: { setAlertContent },
}: AlertContextState) => ({
  setAlertContent,
});

const selectSearchContext = ({ passengers, actions: { setPassengers } }) => ({
  passengers,
  setPassengers,
});

export default createFragmentContainer(
  withSearchContext(selectSearchContext)(
    withAlertContext(selectAlertContextState)(ResultDetailPassenger),
  ),
  {
    itinerary: graphql`
      fragment ResultDetailPassenger_itinerary on ItineraryInterface {
        ...PassengerForm_itinerary
      }
    `,
  },
);
