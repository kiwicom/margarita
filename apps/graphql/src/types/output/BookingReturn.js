// @flow

import { GraphQLObjectType } from 'graphql';

import BookingInterface, { commonFields } from './BookingInterface';
import type { Booking } from '../../dataloaders/bookingsLoader/BookingFlowTypes';
import GraphQLSector from './Sector';
import FromToInterface from './FromToInterface';

const NAME = 'BookingReturn';

const BookingReturn = new GraphQLObjectType({
  name: NAME,
  description: 'Booking from A to B with return, and possible stopovers',
  interfaces: [BookingInterface, FromToInterface],
  isTypeOf: (value: Booking) => value.type === NAME,
  fields: {
    ...commonFields,

    inbound: {
      type: GraphQLSector,
      resolve: ({ inbound }: Booking) => inbound,
    },
    outbound: {
      type: GraphQLSector,
      resolve: ({ outbound }: Booking) => outbound,
    },
  },
});

export default BookingReturn;
