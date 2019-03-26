// @flow

import type { Location } from '../location/Location';
import type { RouteStop } from '../booking/Booking';

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

export type Price = {|
  +amount: ?number,
  +currency: ?string,
|};

export type Time = {|
  +local: ?(string | number),
  +utc: ?(string | number),
|};

export type Transporter = {|
  +name: ?string,
|};

export type Vehicle = {|
  +type: ?string,
  +uniqueNo: ?string,
|};

export type Segment = {|
  +duration: ?number,
  +id: ?string,
  +transporter: ?Transporter,
  +vehicle: ?Vehicle,
  +arrival: ?RouteStop,
  +departure: ?RouteStop,
|};

export type Sector = {|
  +arrivalTime: ?Time,
  +departureTime: ?Time,
  +destination: ?Location,
  +duration: ?number,
  +origin: ?Location,
  +segments: ?Array<Segment>,
  +stopoverDuration: number | null,
  +departure: RouteStop,
  +arrival: RouteStop,
|};

export type Itinerary = {|
  +id: string,
  +type: ?string,
  +isValid: ?boolean,
  +isChecked: ?boolean,
  +bookingToken: ?string,
  +price: ?Price,
  +origin: ?Location,
  +destination: ?Location,
  +startTime: ?Time,
  +endTime: ?Time,
  +sectors: ?Array<Sector>,
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
