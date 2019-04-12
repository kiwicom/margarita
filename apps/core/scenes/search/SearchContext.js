// @flow

import * as React from 'react';
import { withContext, noop } from '@kiwicom/margarita-utils';
import { type TripTypes, TRIP_TYPES } from '@kiwicom/margarita-config';
import * as DateFNS from 'date-fns';

import { MODAL_TYPE } from './SearchConstants';

type Props = {|
  +children: React.Node,
  +dateFrom?: string,
  +dateTo?: string,
  +returnDateFrom?: string,
  +returnDateTo?: string,
  +tripType?: TripTypes,
  +sortBy?: SortTypes,
  +travelFrom?: Array<Location>,
  +travelTo?: Array<Location>,
|};

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
export type SortTypes = 'QUALITY' | 'PRICE' | 'DURATION';
type State = {|
  tripType: TripTypes,
  travelFrom: Array<Location>,
  travelTo: Array<Location>,
  dateFrom: Date,
  sortBy: SortTypes,
  dateTo: Date,
  returnDateFrom: Date,
  returnDateTo: Date,
  modalType: ModalTypes,
  ...PassengersData,
  +actions: {
    +switchFromTo: () => void,
    +setDepartureDate: (Date, Date) => void,
    +setReturnDate: (Date, Date) => void,
    +setTripType: TripTypes => void,
    +setSortBy: SortTypes => void,
    +setModalType: ModalTypes => void,
    +setPassengerData: ($ReadOnly<PassengersData>) => void,
    +clearLocation: LocationSearchType => void,
    +addLocation: (type: LocationSearchType, location: Location) => void,
    +setLocation: (type: LocationSearchType, location: Location) => void,
  },
|};

const defaultDepartureDate = DateFNS.addDays(new Date(), 1);
const defaultReturnDate = DateFNS.addDays(defaultDepartureDate, 2);
const defaultSortBy = 'QUALITY';

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
  tripType: TRIP_TYPES.RETURN,
  travelFrom: defaultPlaces.origin,
  travelTo: defaultPlaces.departure,
  dateFrom: defaultDepartureDate,
  dateTo: defaultDepartureDate,
  sortBy: defaultSortBy,
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
    setSortBy: noop,
    setModalType: noop,
    setPassengerData: noop,
    setLocation: noop,
    clearLocation: noop,
    addLocation: noop,
  },
};

const { Provider, Consumer } = React.createContext<State>(defaultState);

const parseDate = (date?: string, key: string) => {
  return date ? { [key]: new Date(date) } : {};
};

export default class SearchContextProvider extends React.Component<
  Props,
  State,
> {
  constructor(props: Props) {
    super(props);

    const {
      children, // eslint-disable-line no-unused-vars
      dateFrom,
      dateTo,
      returnDateFrom,
      returnDateTo,
      ...rest
    } = props;
    this.state = {
      ...defaultState,
      ...parseDate(dateFrom, 'dateFrom'),
      ...parseDate(dateTo, 'dateTo'),
      ...parseDate(returnDateFrom, 'returnDateFrom'),
      ...parseDate(returnDateTo, 'returnDateTo'),
      ...rest,
      actions: {
        switchFromTo: this.switchFromTo,
        setDepartureDate: this.setDepartureDate,
        setReturnDate: this.setReturnDate,
        setTripType: this.setTripType,
        setSortBy: this.setSortBy,
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

  setDepartureDate = (dateFrom: Date, dateTo: Date) => {
    this.setState(prevState => {
      return {
        dateFrom: dateFrom,
        dateTo: dateTo,
        returnDateFrom: DateFNS.max([prevState.returnDateFrom, dateTo]),
        returnDateTo: DateFNS.max([prevState.returnDateTo, dateTo]),
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

  setReturnDate = (returnDateFrom: Date, returnDateTo: Date) => {
    this.setState(prevState => {
      const departureDateFrom = DateFNS.min([
        prevState.dateFrom,
        returnDateFrom,
      ]);
      const departureDateTo = DateFNS.min([prevState.dateTo, returnDateFrom]);
      return {
        dateFrom: departureDateFrom,
        dateTo: departureDateTo,
        returnDateFrom: returnDateFrom,
        returnDateTo: returnDateTo,
      };
    });
  };

  setTripType = (tripType: TripTypes) => {
    this.setState({ tripType });
  };

  setSortBy = (sortBy: SortTypes) => {
    this.setState({ sortBy });
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
