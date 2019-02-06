// @flow

import BadgesContainer from './BadgesContainer';

export type Transporter = {|
  +name: ?string,
|};

export type Segment = {|
  +id?: string,
  +arrivalTime: ?{|
    +local: ?any,
    +utc: ?any,
  |},
  +departureTime: ?{|
    +local: ?any,
    +utc: ?any,
  |},
  +destination: ?{|
    +name: ?string,
  |},
  +duration: ?number,
  +origin: ?{|
    +name: ?string,
  |},
  +transporter: ?Transporter,
|};

export type Sector = {|
  +duration: ?number,
  +destination: ?{|
    +name: ?string,
  |},
  +origin: ?{|
    +name: ?string,
  |},
  +segments: ?$ReadOnlyArray<?Segment>,
  +transporters: ?Array<?Transporter>,
|};

export type ItineraryCardProps = {|
  // +sectors?: ?$ReadOnlyArray<?Sector>,
  // ...React.ElementProps<typeof BadgesContainer>,
  // +price: {|
  //   +amount: number,
  //   +currency: string,
  // |},
  data: any,
|};
