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

export type Location = {|
  +id: ?string | number,
  +locationId: ?string,
  +name: ?string,
  +type: ?string,
|};

export type LocationSearchType = 'travelTo' | 'travelFrom';

type State = {|
  tripType: TripTypes,
  travelFrom: Array<Location>,
  travelTo: Array<Location>,
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
    +clearLocation: LocationSearchType => void,
    +addLocation: (type: LocationSearchType, location: Location) => void,
    +setLocation: (type: LocationSearchType, location: Location) => void,
  },
|};

const defaultDepartureDate = DateFNS.addDays(new Date(), 1);
const defaultReturnDate = DateFNS.addDays(defaultDepartureDate, 2);

// TODO Temporary values for better development experiences, It should be replaced with nearest place suggestion.
const defaultPlaces = {
  origin: [
    {
      id: 'TG9jYXRpb246cHJhZ3VlX2N6',
      locationId: 'prague_cz',
      name: 'Prague',
      type: 'destination',
    },
  ],
  departure: [
    {
      id: 'TG9jYXRpb246b3Nsb19ubw==',
      locationId: 'oslo_no',
      name: 'Oslo',
      type: 'destination',
    },
  ],
};

const defaultState = {
  tripType: 'return',
  travelFrom: defaultPlaces.origin,
  travelTo: defaultPlaces.departure,
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
    setLocation: noop,
    clearLocation: noop,
    addLocation: noop,
  },
};

const { Provider, Consumer } = React.createContext<State>(defaultState);

export default class SearchContextProvider extends React.Component<
  Props,
  State,
> {
  constructor(props: Props) {
    super(props);

    this.state = {
      ...defaultState,
      actions: {
        switchFromTo: this.switchFromTo,
        setDepartureDate: this.setDepartureDate,
        setReturnDate: this.setReturnDate,
        setTripType: this.setTripType,
        setModalType: this.setModalType,
        setPassengerData: this.setPassengerData,
        clearLocation: this.clearLocation,
        addLocation: this.addLocation,
        setLocation: this.setLocation,
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

  clearLocation = (locationType: LocationSearchType) => {
    this.setState({ [locationType]: [] });
  };

  addLocation = (locationType: LocationSearchType, location: Location) => {
    this.setState(({ [locationType]: selectedLocations }) => ({
      [locationType]: [...selectedLocations, location],
    }));
  };

  setLocation = (
    locationType: LocationSearchType,
    location: Location | Location[],
  ) => {
    this.setState({
      [locationType]: Array.isArray(location) ? location : [location],
    });
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
