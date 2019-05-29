// @flow

import * as React from 'react';
import {
  PassengerCards,
  withAlertContext,
  type AlertContent,
  type AlertContextState,
} from '@kiwicom/margarita-components';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';

import {
  withBookingContext,
  type BookingContextState,
  type PassengerType,
} from '../../../contexts/bookingContext/BookingContext.js';
import type { ResultDetailPassenger_itinerary as ResultDetailPassengerType } from './__generated__/ResultDetailPassenger_itinerary.graphql';
import PassengerForm from '../../../components/passengerForm/PassengerForm';

type Props = {|
  +itinerary: ?ResultDetailPassengerType,
  +setAlertContent: (alertContent: AlertContent | null) => void,
  +passengers: Array<PassengerType>,
  +setPassengers: (Array<PassengerType>) => void,
|};

type State = {|
  +isFormVisible: boolean,
  +currentEditID: ?string,
|};

class ResultDetailPassenger extends React.Component<Props, State> {
  state = {
    isFormVisible: false,
    currentEditID: '',
  };

  validateForm = passenger => {
    const existsID: boolean = !!this.props.passengers.find(
      el => el.id === passenger.id,
    );
    if (!(passenger.id && passenger.name)) {
      return 'ID and Name are mandatory';
    }
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
    this.setState({ currentEditID: '' });
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

const bookingContextState = ({
  passengers,
  actions: { setPassengers },
}: BookingContextState) => ({
  passengers,
  setPassengers,
});

export default createFragmentContainer(
  withBookingContext(bookingContextState)(
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
