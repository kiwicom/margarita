// @flow

import * as React from 'react';
import {
  PassengerCards,
  type PassengerCardType,
  withAlertContext,
  type AlertContent,
  type AlertContextState,
} from '@kiwicom/margarita-components';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';

import type { ResultDetailPassenger_itinerary as ResultDetailPassengerType } from './__generated__/ResultDetailPassenger_itinerary.graphql';
import PassengerForm from '../../../components/passengerForm/PassengerForm';

type Props = {|
  +itinerary: ?ResultDetailPassengerType,
  +setAlertContent: (alertContent: AlertContent | null) => void,
|};

type State = {|
  +isFormVisible: boolean,
  +passengerData: Array<PassengerCardType>,
  +currentEditID: ?string,
|};

// @TODO: This data should not be mocked in the future. Remove it.
const defaultPassengers = [
  {
    name: 'John',
    lastName: 'Doe',
    gender: 'male',
    nationality: 'Russian',
    dateOfBirth: new Date('1980-06-22'),
    id: 'DF45SV8',
    passengerCount: 1,
    bags: [
      {
        quantity: 2,
        dimensions: '28 x 52 x 78 cm',
        weight: '20 kg',
        price: {
          amount: 84,
          currency: 'EUR',
        },
      },
      {
        quantity: 1,
        dimensions: '28 x 52 x 78 cm',
        weight: '20 kg',
        price: {
          amount: 84,
          currency: 'EUR',
        },
      },
    ],
  },
  {
    name: 'Jana',
    lastName: 'Nováková',
    gender: 'female',
    nationality: 'Czech',
    dateOfBirth: new Date('1984-06-12'),
    id: 'DF45SV9',
    insurance: 'Travel Insurance Name',
    passengerCount: 1,
    bags: [
      {
        quantity: 1,
        dimensions: '28 x 52 x 78 cm',
        weight: '20 kg',
        price: {
          amount: 84,
          currency: 'EUR',
        },
      },
    ],
  },
];

class ResultDetailPassenger extends React.Component<Props, State> {
  state = {
    isFormVisible: false,
    passengerData: defaultPassengers,
    currentEditID: '',
  };

  validateForm = passenger => {
    const existsID: boolean = !!this.state.passengerData.find(
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

  getNewPassengerData = passenger => {
    // If we are editing, replace the passenger, else add it
    const { currentEditID, passengerData } = this.state;
    if (currentEditID) {
      return passengerData.map(el =>
        el.id === currentEditID ? passenger : el,
      );
    }
    return [...passengerData, passenger];
  };

  handleFormSaveRequest = passenger => {
    const errorMessage = this.validateForm(passenger);
    if (errorMessage) {
      this.props.setAlertContent({
        message: errorMessage,
      });
    } else {
      this.setState({
        passengerData: this.getNewPassengerData(passenger),
      });
      this.toggleModal();
    }
  };

  handleEditPassenger = (id: ?string) => {
    this.setState({ isFormVisible: true, currentEditID: id });
  };

  handleDeletePassenger = (id: ?string) => {
    this.setState(state => ({
      passengerData: state.passengerData.filter(
        passenger => passenger.id !== id,
      ),
    }));
  };

  toggleModal = () => {
    this.setState({ currentEditID: '' });
    this.setState(state => ({ isFormVisible: !state.isFormVisible }));
  };

  render() {
    const { passengerData, isFormVisible, currentEditID } = this.state;
    const prefillData = currentEditID
      ? passengerData.find(el => el.id === currentEditID)
      : null;
    return (
      <>
        <PassengerCards
          passengerCards={passengerData}
          onEditPress={this.handleEditPassenger}
          editIconName="edit"
          deleteIconName="close"
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

export default createFragmentContainer(
  withAlertContext(selectAlertContextState)(ResultDetailPassenger),
  {
    itinerary: graphql`
      fragment ResultDetailPassenger_itinerary on ItineraryInterface {
        ...PassengerForm_itinerary
      }
    `,
  },
);
