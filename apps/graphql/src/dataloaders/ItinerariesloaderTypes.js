// @flow

export type ItinerariesSearchParametersType = {|
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

export type TripSegmentType = {|
  +city: string,
  +cityCode: string,
  +localTime: ?Date,
  +utcTime: ?Date,
|};
export type RouteItemType = {|
  +airline: string,
  +arrival: TripSegmentType,
  +departure: TripSegmentType,
  +id: string,
|};

// start - new structure

export type CountryType = {|
  +id: ?string,
  +name: ?string,
  +code: ?string,
  +slug: ?string,
  +flagURL: ?string,
|};

export type PriceType = {|
  +amount: ?number,
  +currency: ?string,
|};

export type LocationType = {|
  +id: ?string,
  +locationId: ?string,
  +name: ?string,
  +timezone: ?string,
  +country: ?CountryType,
|};
export type DateType = {|
  +local: ?Date,
  +utc: ?Date,
|};

export type TransporterType = {|
  +name: ?string,
|};

export type VehicleType = {|
  +type: ?string,
  +uniqueNo: ?string,
|};

export type SegmentType = {|
  +arrivalTime: ?DateType,
  +departureTime: ?DateType,
  +destination: ?LocationType,
  +duration: ?number,
  +id: ?string,
  +origin: ?LocationType,
  +transporter: ?TransporterType,
  +vehicle: ?VehicleType,
|};

export type SectorType = {|
  +arrivalTime: ?DateType,
  +departureTime: ?DateType,
  +destination: ?LocationType,
  +duration: ?number,
  +origin: ?LocationType,
  +segments: ?Array<SegmentType>,
|};

export type newItinerariesStructureType = {|
  id: string,
  +type: ?string,
  +price: ?PriceType,
  +origin: ?LocationType,
  +destination: ?LocationType,
  +startTime: ?DateType,
  +endTime: ?DateType,
  +sectors: ?Array<SectorType>,
|};
// end - new structure

export type ItinerariesType = {|
  +airlines: Array<string>,
  +id: string,
  +flyFrom: string,
  +flyTo: string,
  +localDeparture: Date,
  +localArrival: Date,
  +price: PriceType,
  +route: Array<RouteItemType>,
  +routes: Array<Array<string>>,
  ...newItinerariesStructureType,
|};

export type ApiRouteItemType = {|
  +airline?: string,
  +cityFrom?: string,
  +cityTo?: string,
  +flight_no?: number,
  +flyFrom?: string,
  +flyTo?: string,
  +id?: string,
  +local_arrival?: Date,
  +local_departure?: Date,
  +utc_arrival?: ?Date,
  +utc_departure?: Date,
  +vehicle_type?: string,
|};

export type ApiCountryType = {|
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
    +countryFrom?: ApiCountryType,
    +countryTo?: ApiCountryType,
    +price: number,
    +flyFrom: string,
    +flyTo: string,
    +local_departure: Date,
    +utc_departure: Date,
    +local_arrival: Date,
    +utc_arrival: Date,
    +route: Array<ApiRouteItemType>,
    +routes: Array<Array<string>>,
  |}>,
|};
