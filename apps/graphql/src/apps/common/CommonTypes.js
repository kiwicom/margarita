// @flow

export type DateType = {|
  +local: ?(string | number),
  +utc: ?(string | number),
|};

export type Price = {|
  +amount: ?number,
  +currency: ?string,
|};

export type RouteStop = {|
  +cityId?: ?string,
  +time: ?DateType,
  +code: ?string,
|};

export type Sector = {|
  +duration?: ?number,
  +segments: ?Array<Segment>,
  +stopoverDuration?: ?number,
  +departure: ?RouteStop,
  +arrival: ?RouteStop,
|};

export type Segment = {|
  +id: ?string,
  +carrier: ?Carrier,
  +duration: ?number,
  +vehicle: ?Vehicle,
  +departure: ?RouteStop,
  +arrival: ?RouteStop,
|};

export type Carrier = {|
  +name: ?string,
  +code: ?string,
|};

export type Vehicle = {|
  +type: ?string,
  +uniqueNo: ?string,
|};

export type HoldBagOption = {|
  +quantity: number,
  +price?: ?Price,
  +dimensions?: ?string,
  +weight?: ?string,
|};
