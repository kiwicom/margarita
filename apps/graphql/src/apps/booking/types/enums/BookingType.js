// @flow

import { GraphQLEnumType } from 'graphql';

export default new GraphQLEnumType({
  name: 'BookingType',
  values: {
    BOOKING_RETURN: {
      value: 'BookingReturn',
    },
    BOOKING_MULTICITY: {
      value: 'BookingMulticity',
    },
    BOOKING_ONE_WAY: {
      value: 'BookingOneWay',
    },
  },
});
