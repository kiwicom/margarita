// @flow

import { GraphQLObjectType, GraphQLList } from 'graphql';

import BookingInterface, { commonFields } from './BookingInterface';
import type { Booking } from '../../dataloaders/bookingsLoader/BookingFlowTypes';
import GraphQLTrip from './Trip';

const NAME = 'BookingMulticity';

const BookingMulticity = new GraphQLObjectType({
  name: NAME,
  description: 'Booking from A to B, B to C and so on, with possible stopovers',
  interfaces: [BookingInterface],
  isTypeOf: (value: Booking) => value.type === NAME,
  fields: {
    ...commonFields,

    trips: {
      type: GraphQLList(GraphQLTrip),
      resolve: ({ trips }: Booking) => trips,
    },
  },
});

export default BookingMulticity;
