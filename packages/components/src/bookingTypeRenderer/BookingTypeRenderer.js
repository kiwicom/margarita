// @flow

import * as React from 'react';

type Props = {|
  +type: ?string,
  +oneWayComponent: React.Node,
  +returnComponent: React.Node,
  +multicityComponent: React.Node,
|};

export default function BookingTypeRenderer(props: Props) {
  switch (props.type) {
    case 'BOOKING_ONE_WAY':
      return props.oneWayComponent;
    case 'BOOKING_RETURN':
      return props.returnComponent;
    case 'BOOKING_MULTICITY':
      return props.multicityComponent;
    default:
      return null;
  }
}
