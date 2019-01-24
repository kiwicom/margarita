// @flow

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
export type LocationArea = {|
  +id: ?string,
  +code: ?string,
  +locationId: ?string,
  +name: ?string,
  +slug: ?string,
  +flagURL: ?string,
|};

export type Location = {|
  +id: ?string,
  +locationId: ?string,
  +name: ?string,
  +timezone: ?string,
  +country: ?LocationArea,
  +slug: ?string,
|};
export type Segment = {|
  +arrivalTime: ?Time,
  +departureTime: ?Time,
  +destination: ?Location,
  +duration: ?number,
  +id: ?string,
  +origin: ?Location,
  +transporter: ?Transporter | ?Array<?Transporter>,
  +vehicle: ?Vehicle | ?Array<?Vehicle>,
|};
export type Sector = {|
  +arrivalTime: ?Time,
  +departureTime: ?Time,
  +destination: ?Location,
  +duration: ?number,
  +origin: ?Location,
  +segments: ?Array<Segment>,
|};
