// @flow

export type ApiRouteStop = {|
  +where: {|
    +code: string,
    +name: string,
    +city_id: string,
  |},
  +when: {|
    +utc: Date,
    +local: Date,
  |},
|};

export type ApiFlight = {|
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
  +utc: Date,
  +local: Date,
|};

export type RouteStop = {|
  +cityName: string,
  +cityId: string,
  +time: RouteStopTime,
  +code: string,
|};

type Segment = {|
  +isReturn: boolean,
  +departure: ?RouteStop,
  +arrival: ?RouteStop,
|};

type InboundOutbound = {|
  +departure: ?RouteStop,
  +arrival: ?RouteStop,
  +segments: $ReadOnlyArray<Segment>,
|};

export type TypeSpecificData = {|
  +segments: $ReadOnlyArray<Segment>,
  +arrival: ?RouteStop,
  +departure: ?RouteStop,
  +inbound?: InboundOutbound,
  +outbound?: InboundOutbound,
  +trips?: $ReadOnlyArray<$ReadOnlyArray<Segment>>,
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
