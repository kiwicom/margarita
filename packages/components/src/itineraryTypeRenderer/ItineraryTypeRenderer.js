// @flow

import * as React from 'react';

type Props = {|
  +typename: ?string,
  +oneWayComponent: React.Node,
  +returnComponent: React.Node,
|};

export default function ItineraryTypeRenderer(props: Props) {
  switch (props.typename) {
    case 'ItineraryOneWay':
      return props.oneWayComponent;
    case 'ItineraryReturn':
      return props.returnComponent;
    default:
      return null;
  }
}
