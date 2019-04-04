// @flow

import { type TripTypes } from '@kiwicom/margarita-config';

import type { RouteStop, Sector, Price } from '../common/CommonTypes';

type Order = 'ASC' | 'DESC';
type Sort = 'price' | 'duration' | 'quality' | 'date' | 'popularity';
type DateRange = {|
  start: Date,
  end?: Date,
|};
type Passengers = {|
  +adults?: number,
  +children?: number,
  +infants?: number,
|};

type SearchLocation = {|
  +ids: string[],
|};

export type ItinerariesOneWaySearchParameters = {|
  +order?: Order,
  +sort?: Sort,
  +itinerary: {|
    +origin: SearchLocation,
    +destination?: SearchLocation,
    +outboundDate: DateRange,
  |},
  +passengers?: Passengers,
|};

export type ItinerariesReturnSearchParameters = {|
  +order?: Order,
  +sort?: Sort,
  +itinerary: {|
    +origin: SearchLocation,
    +destination?: SearchLocation,
    +outboundDate: DateRange,
    +inboundDate: DateRange,
  |},
  +passengers?: Passengers,
|};

export type ItineraryCheckParameters = {|
  +bookingToken: string,
  +bags: number,
  +passengers: Passengers,
|};

export type Itinerary = {|
  +id: string,
  +price: ?Price,
  +sectors: ?Array<Sector>,
  +type: ?TripTypes,
  +bookingToken: ?string,
  +isChecked: ?boolean,
  +isValid: ?boolean,
  +departure: ?RouteStop,
  +arrival: ?RouteStop,
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
    +booking_token: string,
  |}>,
|};

export type ItineraryApiResponseType = {|
  +flights_checked?: boolean,
  +flights_invalid?: boolean,
  +booking_token?: string,
  +total?: number,
  +flights?: $ReadOnlyArray<{|
    +id?: string,
  |}>,
|};
