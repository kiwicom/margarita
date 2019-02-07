// @flow

import * as React from 'react';
import { Icon } from '@kiwicom/universal-components';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';

import type { FromToIcon as BookingType } from './__generated__/FromToIcon.graphql';

type Props = {|
  +data: ?BookingType,
  +iconColor: string,
|};

const getBookingType = (type: ?$PropertyType<BookingType, 'type'>) => {
  switch (type) {
    case 'BOOKING_RETURN':
      return 'flight-return';
    case 'BOOKING_MULTICITY':
      return 'flight-multicity';
    case 'BOOKING_ONE_WAY':
      return 'flight-direct';
    default:
      return '';
  }
};

export const FromToIcon = (props: Props) => {
  const type = props.data?.type;
  const iconType = getBookingType(type);

  if (iconType !== '') {
    return <Icon name={iconType} color={props.iconColor} />;
  }

  return null;
};

export default createFragmentContainer(
  FromToIcon,
  graphql`
    fragment FromToIcon on BookingInterface {
      type
    }
  `,
);
