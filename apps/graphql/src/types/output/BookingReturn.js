// @flow

import { GraphQLObjectType } from 'graphql';

import BookingInterface, { commonFields } from './BookingInterface';
import type { Booking } from '../../dataloaders/bookingsLoader/BookingFlowTypes';
import GraphQLTrip from './Trip';

const NAME = 'BookingReturn';

const BookingReturn = new GraphQLObjectType({
  name: NAME,
  description: 'Booking from A to B with return, and possible stopovers',
  interfaces: [BookingInterface],
  isTypeOf: (value: Booking) => value.type === NAME,
  fields: {
    ...commonFields,

    inbound: {
      type: GraphQLTrip,
      resolve: ({ inbound }: Booking) => inbound,
    },
    outbound: {
      type: GraphQLTrip,
      resolve: ({ outbound }: Booking) => outbound,
    },
  },
});

export default BookingReturn;
