// @flow

import { type TripType } from '@kiwicom/margarita-config';

import type {
  RouteStop,
  Sector,
  Price,
  HoldBagOption,
} from '../common/CommonTypes';

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
  +limit?: number,
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
  +limit?: number,
  +itinerary: {|
    +origin: SearchLocation,
    +destination?: SearchLocation,
    +outboundDate: DateRange,
    +inboundDate?: DateRange,
    +nightsInDestination?: {
      +from?: number,
      +to?: number,
    },
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
  +type: ?TripType,
  +bookingToken: ?string,
  +isChecked: ?boolean,
  +isValid: ?boolean,
  +departure: ?RouteStop,
  +arrival: ?RouteStop,
  +holdBagOptions: ?Array<HoldBagOption>,
|};

export type HoldBagProps = {|
  +weight: ?number,
  +width: ?number,
  +height: ?number,
  +length: ?number,
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

export type ApiBagsPrice = { [string]: ?number };
export type ApiBagsLimits = {|
  hold_weight?: number,
  hold_width?: number,
  hold_height?: number,
  hold_length?: number,
|};

// @TODO data should be with "?"
export type ItinerariesApiResponse = {|
  +currency?: string,
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
    +bags_price?: ApiBagsPrice,
    +baglimit?: ApiBagsLimits,
  |}>,
|};

export type ItineraryApiResponse = {|
  +currency?: string,
  +flights_checked?: boolean,
  +flights_invalid?: boolean,
  +booking_token?: string,
  +total?: number,
  +flights?: Array<ItineraryApiSegment>,
  +bags_price?: ApiBagsPrice,
  +luggage?: $ReadOnlyArray<?number>,
|};

export type ItineraryApiSegment = {|
  +id?: string,
  +src?: string,
  +dst?: string,
  +flight_no?: string,
  +local_arrival?: string,
  +local_departure?: string,
  +utc_arrival?: string,
  +utc_departure?: string,
  +return?: number,
  +airline?: {|
    +Name?: string,
    +iatacode?: string,
  |},
|};
