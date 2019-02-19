// @flow

import { GraphQLObjectType, GraphQLList } from 'graphql';

import BookingInterface, { commonFields } from './BookingInterface';
import type { Booking } from '../../dataloaders/bookingsLoader/BookingFlowTypes';
import GraphQLSector from './Sector';
import FromToInterface from './FromToInterface';

const NAME = 'BookingMulticity';

const BookingMulticity = new GraphQLObjectType({
  name: NAME,
  description: 'Booking from A to B, B to C and so on, with possible stopovers',
  interfaces: [BookingInterface, FromToInterface],
  isTypeOf: (value: Booking) => value.type === NAME,
  fields: {
    ...commonFields,

    sectors: {
      type: GraphQLList(GraphQLSector),
      resolve: ({ sectors }: Booking) => sectors,
    },
  },
});

export default BookingMulticity;
