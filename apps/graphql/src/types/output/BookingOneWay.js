// @flow

import { GraphQLObjectType } from 'graphql';

import BookingInterface, { commonFields } from './BookingInterface';
import type { Booking } from '../../dataloaders/bookingsLoader/BookingFlowTypes';
import GraphQLSector from './Sector';
import FromToInterface from './FromToInterface';

const NAME = 'BookingOneWay';

const BookingOneWay = new GraphQLObjectType({
  name: NAME,
  description: 'Booking from A to B with no return, but possible stopovers',
  interfaces: [BookingInterface, FromToInterface],
  isTypeOf: (value: Booking) => value.type === NAME,
  fields: {
    ...commonFields,
    sector: {
      type: GraphQLSector,
      resolve: (booking: Booking) => booking,
    },
  },
});

export default BookingOneWay;
