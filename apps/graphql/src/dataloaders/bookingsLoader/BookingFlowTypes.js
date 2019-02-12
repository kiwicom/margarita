// @flow

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

export type ApiFlight = {|
  +id: string,
  +arrival: ApiRouteStop,
  +departure: ApiRouteStop,
  +return: number,
|};

export type BookingApiResult = {|
  +bid: number,
  +status: string,
  +flights: Array<ApiFlight>,
  +passengers: $ReadOnlyArray<{|
    +id: number,
  |}>,
  +segments: $ReadOnlyArray<string> | null,
|};

type RouteStopTime = {|
  +utc: number,
  +local: number,
|};

export type RouteStop = {|
  +cityName: string,
  +cityId: string,
  +time: RouteStopTime,
  +code: string,
|};

export type Segment = {|
  +id: string,
  +isReturn: boolean,
  +departure: ?RouteStop,
  +arrival: ?RouteStop,
|};

type Trip = {|
  +departure: ?RouteStop,
  +arrival: ?RouteStop,
  +segments: $ReadOnlyArray<Segment>,
|};

export type TypeSpecificData = {|
  +segments: $ReadOnlyArray<Segment>,
  +arrival: ?RouteStop,
  +departure: ?RouteStop,
  +inbound?: Trip,
  +outbound?: Trip,
  +trips?: $ReadOnlyArray<Trip>,
|};

export type Booking = {|
  +bid: number,
  +status: string,
  +arrival: RouteStop,
  +departure: RouteStop,
  +passengerCount: number,
  +type: 'BookingReturn' | 'BookingMulticity' | 'BookingOneWay',
  ...TypeSpecificData,
|};
