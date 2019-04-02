// @flow

import type { RouteStop, Sector } from '../common/CommonTypes';

export type ApiRouteStop = {|
  +where: {|
    +code: string,
    +name: string,
    +city_id: string,
  |},
  +when: {|
    +utc: number,
    +local: number,
  |},
|};

export type ApiCarrier = {|
  +name: string,
  +iata: string,
|};

export type ApiFlight = {|
  +id: string,
  +arrival: ApiRouteStop,
  +departure: ApiRouteStop,
  +return: number,
  +airline: ApiCarrier,
|};

export type BookingApiResult = {|
  +bid: number,
  +status: string,
  +flights: Array<ApiFlight>,
  +passengers: Array<Passenger>,
  +segments: $ReadOnlyArray<string> | null,
  +contact: ContactDetails,
|};

export type RouteStopTimeApi = {|
  +utc: ?number,
  +local: ?number,
|};

export type TypeSpecificData = {|
  ...Sector,
  +inbound?: Sector,
  +outbound?: Sector,
  +sectors?: $ReadOnlyArray<Sector>,
|};

export type Bag = {|
  +type: string,
  +dimensions: string,
  +quantity: number,
|};

export type Passenger = {|
  +bags: $ReadOnlyArray<Bag>,
  +birthday: string,
  +category: string,
  +firstname: string,
  +id: number,
  +insuranceType: string,
  +lastname: string,
  +nationality: string,
  +title: string,
  +visaRequired: boolean,
|};

export type ContactDetails = {|
  +email: string,
  +phone: string,
|};

export type Booking = {|
  +bid: number,
  +status: string,
  +arrival: RouteStop,
  +departure: RouteStop,
  +passengerCount: number,
  +passengers: Array<Passenger>,
  +contact: ContactDetails,
  +type: 'BookingReturn' | 'BookingMulticity' | 'BookingOneWay',
  ...TypeSpecificData,
|};
