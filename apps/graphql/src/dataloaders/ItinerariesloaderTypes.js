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
  +id: string,
  +name: string,
  +code: string,
  +slug: string,
  +flagURL: string,
|};

// @TODO rename PriceType
export type PriceType = {|
  +amount: number,
  +currency: string,
|};

export type LocationType = {|
  +id: string,
  +locationId: string,
  +name: string,
  +timezone: string,
  +country: CountryType,
|};
export type DateType = {|
  +local: Date,
  +utc: Date,
|};
export type ProviderType = {|
  +id: string,
  +name: string,
|};
export type VehicleType = {|
  +type: 'bus' | 'train' | 'aircraft',
  +uniqueNo: string,
|};
export type SegmentType = {|
  +arrivalTime: DateType,
  +departureTime: DateType,
  +destination: LocationType,
  +duration: number,
  +id: string,
  +origin: LocationType,
  +provider: ProviderType,
  +vehicle: VehicleType,
|};
export type SectorType = {|
  +arrivalTime: DateType,
  +connections: Array<SegmentType>,
  +departureTime: DateType,
  +destination: LocationType,
  +duration: number,
  +id: string,
  +origin: LocationType,
  +segments: Array<SegmentType>,
|};

export type newItinerariesStructureType = {|
  id: string,
  +type: 'oneway' | 'return' | 'multicity',
  +price: PriceType,
  +origin: LocationType,
  +destination: LocationType,
  +startTime: DateType,
  +endTime: DateType,
  +sectors: Array<SectorType>,
|};
// end - new structure

export type ItinerariesType = {|
  +airlines: Array<string>,
  +id: string,
  +flyFrom: string,
  +flyTo: string,
  +localDeparture: string,
  +localArrival: string,
  +price: PriceType,
  +route: Array<RouteItemType>,
  +routes: Array<Array<string>>,
  ...newItinerariesStructureType,
|};

export type ApiRouteItemType = {|
  +airline?: string,
  +cityFrom?: string,
  +cityTo?: string,
  +flyFrom?: string,
  +flyTo?: string,
  +id?: string,
  +local_arrival?: Date,
  +utc_arrival?: ?Date,
  +local_departure?: Date,
  +utc_departure?: Date,
|};

export type ApiResponseType = {|
  +currency: string,
  +data: $ReadOnlyArray<{|
    +id: string,
    +airlines: Array<string>,
    +price: number,
    +flyFrom: string,
    +flyTo: string,
    +local_departure: string,
    +local_arrival: string,
    +route: Array<ApiRouteItemType>,
    +routes: Array<Array<string>>,
  |}>,
|};
