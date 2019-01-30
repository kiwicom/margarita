// @flow

import { type Location } from './LocationsloaderTypes';

export type ItinerariesSearchParameters = {|
  +travelFrom: string,
  +dateFrom: Date,
  +dateTo?: Date,
  +travelTo?: string,
  +returnDateFrom?: Date,
  +returnDateTo?: Date,
  +passengers?: {|
    +adults?: number,
    +children?: number,
    +infants?: number,
  |},
|};

export type TripSegment = {|
  +city: string,
  +cityCode: string,
  +localTime: ?Date,
  +utcTime: ?Date,
|};
export type RouteItem = {|
  +airline: string,
  +arrival: TripSegment,
  +departure: TripSegment,
  +id: string,
|};

// start - new structure

export type Price = {|
  +amount: ?number,
  +currency: ?string,
|};

export type Time = {|
  +local: ?string,
  +utc: ?string,
|};

export type Transporter = {|
  +name: ?string,
|};

export type Vehicle = {|
  +type: ?string,
  +uniqueNo: ?string,
|};

export type Segment = {|
  +arrivalTime: ?Time,
  +departureTime: ?Time,
  +destination: ?Location,
  +duration: ?number,
  +id: ?string,
  +origin: ?Location,
  +transporter: ?Transporter,
  +vehicle: ?Vehicle,
|};

export type Sector = {|
  +arrivalTime: ?Time,
  +departureTime: ?Time,
  +destination: ?Location,
  +duration: ?number,
  +origin: ?Location,
  +segments: ?Array<Segment>,
|};

export type newItinerariesStructureType = {|
  id: string,
  +type: ?string,
  +price: ?Price,
  +origin: ?Location,
  +destination: ?Location,
  +startTime: ?Time,
  +endTime: ?Time,
  +sectors: ?Array<Sector>,
|};
// end - new structure

export type ItinerariesType = {|
  +airlines: Array<string>,
  +id: string,
  +flyFrom: string,
  +flyTo: string,
  +localDeparture: Date,
  +localArrival: Date,
  +price: Price,
  +route: Array<RouteItem>,
  +routes: Array<Array<string>>,
  ...newItinerariesStructureType,
|};

export type ApiRouteItem = {|
  +airline?: string,
  +cityFrom?: string,
  +cityTo?: string,
  +flight_no?: number,
  +flyFrom?: string,
  +flyTo?: string,
  +id?: string,
  +local_arrival?: string,
  +local_departure?: string,
  +utc_arrival?: ?string,
  +utc_departure?: string,
  +vehicle_type?: string,
|};

export type ApiCountry = {|
  +code: string,
  +name: string,
|};

// @TODO data should be with "?"
export type ApiResponseType = {|
  +currency: string,
  +data: $ReadOnlyArray<{|
    +id: string,
    +airlines: Array<string>,
    +cityFrom: string,
    +cityTo: string,
    +countryFrom?: ApiCountry,
    +countryTo?: ApiCountry,
    +price: number,
    +flyFrom: string,
    +flyTo: string,
    +local_departure: string,
    +utc_departure: string,
    +local_arrival: string,
    +utc_arrival: string,
    +route: Array<ApiRouteItem>,
    +routes: Array<Array<string>>,
  |}>,
|};
