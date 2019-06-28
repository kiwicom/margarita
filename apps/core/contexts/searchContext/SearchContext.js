// @flow

import * as React from 'react';
import * as DateFNS from 'date-fns';
import { Platform } from 'react-native';
import { withContext, noop } from '@kiwicom/margarita-utils';
import {
  type TripType,
  TRIP_TYPES,
  SEARCH_RESULTS_LIMIT,
  DEFAULT_SEARCH_SORTING,
  DEFAULT_NIGHTS_IN_DESTINATION_FROM,
  DEFAULT_NIGHTS_IN_DESTINATION_TO,
} from '@kiwicom/margarita-config';

import {
  parseURLqueryToState,
  createPassengersStateMiddleware,
  createPassengers,
} from './helpers';
import type {
  Location,
  LocationSearchType,
  ParseFieldsParams,
  Passengers,
  SortType,
  SearchContextState,
  PassengerType,
} from './SearchContextTypes';

type Props = {|
  +children: React.Node,
  +routerQuery?: ParseFieldsParams,
|};

export type State = SearchContextState;

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
  tripType: TRIP_TYPES.RETURN,
  travelFrom: defaultPlaces.origin,
  travelTo: defaultPlaces.departure,
  isNightsInDestinationSelected: false,
  nightsInDestinationFrom: DEFAULT_NIGHTS_IN_DESTINATION_FROM,
  nightsInDestinationTo: DEFAULT_NIGHTS_IN_DESTINATION_TO,
  dateFrom: defaultDepartureDate,
  dateTo: defaultDepartureDate,
  sortBy: DEFAULT_SEARCH_SORTING,
  limit: SEARCH_RESULTS_LIMIT,
  returnDateFrom: defaultReturnDate,
  returnDateTo: defaultReturnDate,
  bookingToken: null,
  adults: 1,
  infants: 0,
  passengers: createPassengers({ adults: 1, infants: 0 }),
  actions: {
    setDepartureDate: noop,
    switchFromTo: noop,
    setReturnDate: noop,
    setNightsInDestinationSelection: noop,
    setNightsInDestination: noop,
    setTripType: noop,
    setSortBy: noop,
    setPassengerData: noop,
    setLocation: noop,
    clearLocation: noop,
    addLocation: noop,
    setBookingToken: noop,
    setPassengers: noop,
  },
};

const { Provider, Consumer } = React.createContext<State>(defaultState);

class SearchContextProvider extends React.Component<Props, State> {
  static getDefaultState(routerQuery?: ParseFieldsParams) {
    // hydrate state from URL
    if (Platform.OS === 'web' && routerQuery) {
      const derivedStateFromURL = createPassengersStateMiddleware(
        parseURLqueryToState(routerQuery),
      );
      return {
        ...defaultState,
        ...derivedStateFromURL,
      };
    }
    return defaultState;
  }

  constructor(props: Props) {
    super(props);

    this.state = {
      ...SearchContextProvider.getDefaultState(props.routerQuery),
      actions: {
        switchFromTo: this.switchFromTo,
        setDepartureDate: this.setDepartureDate,
        setReturnDate: this.setReturnDate,
        setNightsInDestinationSelection: this.setNightsInDestinationSelection,
        setNightsInDestination: this.setNightsInDestination,
        setTripType: this.setTripType,
        setSortBy: this.setSortBy,
        setPassengerData: this.setPassengerData,
        clearLocation: this.clearLocation,
        addLocation: this.addLocation,
        setLocation: this.setLocation,
        setBookingToken: this.setBookingToken,
        setPassengers: this.setPassengers,
      },
    };
  }

  setBookingToken = (bookingToken: string) => {
    this.setState({ bookingToken });
  };

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

  setNightsInDestinationSelection = (
    isNightsInDestinationSelected: boolean,
  ) => {
    this.setState({
      isNightsInDestinationSelected,
    });
  };

  setNightsInDestination = (
    nightsInDestinationFrom: number,
    nightsInDestinationTo: number,
  ) => {
    this.setState({
      nightsInDestinationFrom: nightsInDestinationFrom,
      nightsInDestinationTo: nightsInDestinationTo,
    });
  };

  setTripType = (tripType: TripType) => {
    this.setState({ tripType });
  };

  setSortBy = (sortBy: SortType) => {
    this.setState({ sortBy });
  };

  setPassengerData = (passengerData: $ReadOnly<Passengers>) => {
    this.setState({
      passengers: createPassengers(passengerData),
      ...passengerData,
    });
  };

  setPassengers = (passengers: PassengerType[]) => {
    this.setState({ passengers });
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const withSearchContext = (select: State => Object) =>
  withContext<State>(select, Consumer);

export default SearchContextProvider;
