// @flow

import * as React from 'react';
import { withContext, noop } from '@kiwicom/margarita-utils';

import { type BaggageBundleType } from '../passengerForm/baggageBundles/__generated__/BaggageBundle_bagOption.graphql';

type Props = {|
  +children: React.Node,
|};

export type PassengerType = {|
  +name: ?string,
  +lastName: ?string,
  +gender: 'female' | 'male' | 'other',
  +nationality: ?string,
  +dateOfBirth: ?Date,
  +id: ?string,
  +insurance?: ?string,
  +bags: null | Array<BaggageBundleType>,
  +passengerCount: number,
  +visaRequired?: ?boolean,
|};
type State = {|
  +passengers: Array<PassengerType>,
  +actions: {|
    +setPassengers: (Array<PassengerType>) => void,
  |},
|};

const defaultState = {
  passengers: [],
  actions: {
    setPassengers: noop,
  },
};

const { Provider, Consumer } = React.createContext<State>(defaultState);

export default class BookingContextProvider extends React.Component<
  Props,
  State,
> {
  constructor(props: Props) {
    super(props);

    this.state = {
      ...defaultState,
      actions: {
        setPassengers: this.setPassengers,
      },
    };
  }

  setPassengers = (passengers: Array<PassengerType>) => {
    this.setState({ passengers });
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const withBookingContext = (select: State => Object) =>
  withContext<State>(select, Consumer);

export type BookingContextState = State;
