// @flow

import { GraphQLObjectType } from 'graphql';

import BookingInterface, { commonFields } from './BookingInterface';
import type { Booking } from '../../dataloaders/bookingsLoader/BookingFlowTypes';

const NAME = 'BookingOneWay';

const BookingOneWay = new GraphQLObjectType({
  name: NAME,
  description: 'Booking from A to B with no return, but possible stopovers',
  interfaces: [BookingInterface],
  isTypeOf: (value: Booking) => value.type === NAME,
  fields: {
    ...commonFields,
  },
});

export default BookingOneWay;
