// @flow

import * as React from 'react';
import { withContext, noop } from '@kiwicom/margarita-utils';
import * as DateFNS from 'date-fns';

import { MODAL_TYPE } from './SearchConstants';

type Props = {|
  +children: React.Node,
|};

export type TripTypes = 'return' | 'oneWay';
export type ModalTypes = $Keys<typeof MODAL_TYPE>;
export type PassengersData = {|
  adults: number,
  infants: number,
  bags: number,
|};
type State = {|
  tripType: TripTypes,
  travelFrom: string,
  travelTo: string,
  dateFrom: Date,
  dateTo: Date,
  returnDateFrom: Date,
  returnDateTo: Date,
  modalType: ModalTypes,
  ...PassengersData,
  +actions: {
    +switchFromTo: () => void,
    +setDepartureDate: Date => void,
    +setReturnDate: Date => void,
    +setTripType: TripTypes => void,
    +setModalType: ModalTypes => void,
    +setPassengerData: ($ReadOnly<PassengersData>) => void,
    +setTravelFrom: string => void,
    +setTravelTo: string => void,
  },
|};

const defaultDepartureDate = new Date();
const defaultReturnDate = DateFNS.addDays(defaultDepartureDate, 2);

const defaultState = {
  tripType: 'return',
  travelFrom: 'OSL',
  travelTo: 'PRG',
  dateFrom: defaultDepartureDate,
  dateTo: defaultDepartureDate,
  returnDateFrom: defaultReturnDate,
  returnDateTo: defaultReturnDate,
  modalType: MODAL_TYPE.HIDDEN,
  adults: 1,
  infants: 0,
  bags: 0,
  actions: {
    switchFromTo: noop,
    setDepartureDate: noop,
    setReturnDate: noop,
    setTripType: noop,
    setModalType: noop,
    setPassengerData: noop,
    setTravelFrom: noop,
    setTravelTo: noop,
  },
};

const { Provider, Consumer } = React.createContext<State>(defaultState);

export default class SearchContextProvider extends React.Component<
  Props,
  State,
> {
  constructor() {
    super();

    this.state = {
      ...defaultState,
      actions: {
        switchFromTo: this.switchFromTo,
        setDepartureDate: this.setDepartureDate,
        setReturnDate: this.setReturnDate,
        setTripType: this.setTripType,
        setModalType: this.setModalType,
        setPassengerData: this.setPassengerData,
        setTravelFrom: this.setTravelFrom,
        setTravelTo: this.setTravelTo,
      },
    };
  }

  switchFromTo = () => {
    this.setState(state => {
      const from = state.travelFrom;
      const to = state.travelTo;
      return {
        travelFrom: to,
        travelTo: from,
      };
    });
  };

  setDepartureDate = (date: Date) => {
    this.setState(prevState => {
      const returnDate = DateFNS.max(prevState.returnDateFrom, date);
      return {
        dateFrom: date,
        dateTo: date,
        returnDateFrom: returnDate,
        returnDateTo: returnDate,
      };
    });
  };

  // TODO use a place name and placeId
  setTravelFrom = (placeId: string) => {
    this.setState({ travelFrom: placeId });
  };

  setTravelTo = (placeId: string) => {
    this.setState({ travelTo: placeId });
  };

  setReturnDate = (date: Date) => {
    this.setState(prevState => {
      const departureDate = DateFNS.min(prevState.dateFrom, date);
      return {
        dateFrom: departureDate,
        dateTo: departureDate,
        returnDateFrom: date,
        returnDateTo: date,
      };
    });
  };

  setTripType = (tripType: TripTypes) => {
    this.setState({ tripType });
  };

  setModalType = (modalType: ModalTypes) => {
    this.setState({ modalType });
  };

  setPassengerData = (passengerData: $ReadOnly<PassengersData>) => {
    this.setState(passengerData);
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const withSearchContext = (select: State => Object) =>
  withContext<State>(select, Consumer);

export type SearchContextState = State;
