// @flow

import * as React from 'react';
import { Icon } from '@kiwicom/universal-components';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';

import type { FromToIcon_data as FromToType } from './__generated__/FromToIcon_data.graphql';

type Props = {|
  +data: ?FromToType,
  +iconColor: string,
|};

const getIconType = (type: ?$PropertyType<FromToType, '__typename'>) => {
  switch (type) {
    case 'BookingReturn':
    case 'ItineraryReturn':
      return 'flight-return';
    case 'BookingMulticity':
      return 'flight-multicity';
    case 'BookingOneWay':
    case 'Sector':
      return 'flight-direct';
    default:
      return '';
  }
};

export const FromToIcon = (props: Props) => {
  const type = props.data?.__typename;
  const iconType = getIconType(type);

  if (iconType !== '') {
    return <Icon name={iconType} color={props.iconColor} />;
  }

  return null;
};

export default createFragmentContainer(FromToIcon, {
  data: graphql`
    fragment FromToIcon_data on FromToInterface {
      __typename
    }
  `,
});
