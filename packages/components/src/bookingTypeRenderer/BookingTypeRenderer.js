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
    case 'BookingOneWay':
      return props.oneWayComponent;
    case 'BookingReturn':
      return props.returnComponent;
    case 'BookingMulticity':
      return props.multicityComponent;
    default:
      return null;
  }
}
