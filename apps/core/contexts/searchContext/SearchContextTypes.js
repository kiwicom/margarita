// @flow

import { type TripType } from '@kiwicom/margarita-config';

import { type BaggageBundleType } from '../../components/passengerForm/baggageBundles/__generated__/BaggageBundle_bagOption.graphql';

export type Passengers = {|
  +adults: number,
  +infants: number,
|};

export type Location = {|
  +id: ?string | number,
  +locationId: ?string,
  +name: ?string,
  +type: ?string,
|};

export type LocationSearchType = 'travelTo' | 'travelFrom';
export type SortType = 'QUALITY' | 'PRICE' | 'DURATION';

export type SearchContextState = {|
  ...StateParams,
  +actions: StateActions,
|};

// Private Context's types
export type ParseFieldsParams = {|
  +adults?: ?string,
  +bookingToken: ?string,
  +dateFrom?: ?string,
  +dateTo?: ?string,
  +infants?: ?string,
  +nightsInDestinationFrom?: number,
  +nightsInDestinationTo?: number,
  +returnDateFrom?: ?string,
  +returnDateTo?: ?string,
  +travelFrom?: ?string,
  +travelTo?: ?string,
|};

export type ParseFieldsReturn = {|
  +adults?: number,
  +bookingToken: ?string,
  +dateFrom?: Date,
  +dateTo?: Date,
  +infants?: number,
  +nightsInDestinationFrom?: number,
  +nightsInDestinationTo?: number,
  +returnDateFrom?: Date,
  +returnDateTo?: Date,
|};

export type StateParams = {|
  travelFrom: $ReadOnlyArray<Location>,
  travelTo: $ReadOnlyArray<Location>,
  isNightsInDestinationSelected: boolean,
  nightsInDestinationFrom: number,
  nightsInDestinationTo: number,
  dateFrom: Date,
  sortBy: SortType,
  limit: number,
  dateTo: Date,
  returnDateFrom: Date,
  returnDateTo: Date,
  bookingToken: ?string,
  tripType: TripType,
  ...Passengers,
  passengers: PassengerType[],
|};

export type StateActions = {|
  +switchFromTo: () => void,
  +setDepartureDate: (Date, Date) => void,
  +setReturnDate: (Date, Date) => void,
  +setNightsInDestinationSelection: boolean => void,
  +setNightsInDestination: (number, number) => void,
  +setTripType: TripType => void,
  +setSortBy: SortType => void,
  +setPassengerData: ($ReadOnly<Passengers>) => void,
  +clearLocation: LocationSearchType => void,
  +addLocation: (type: LocationSearchType, location: Location) => void,
  +setLocation: (type: LocationSearchType, location: Location) => void,
  +setBookingToken: string => void,
  +setPassengers: (PassengerType[]) => void,
|};

export type PassengerType = {|
  +id: string,
  +name: ?string, // @TODO rename to firstName
  +lastName: ?string,
  +gender: ?('female' | 'male' | 'other'),
  +nationality: ?string,
  +dateOfBirth: ?Date,
  +passportId: ?string,
  +bags: null | Array<BaggageBundleType>,
  +type?: ?('adult' | 'infant'),
  +insurance?: ?string,
  +visaRequired?: ?boolean,
|};
