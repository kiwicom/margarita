// @flow

import { GraphQLObjectType } from 'graphql';

import BookingInterface, { commonFields } from './BookingInterface';
import type { Booking } from '../../dataloaders/bookingsLoader/BookingFlowTypes';

const NAME = 'BookingMulticity';

const BookingMulticity = new GraphQLObjectType({
  name: NAME,
  description: 'Booking from A to B, B to C and so on, with possible stopovers',
  interfaces: [BookingInterface],
  isTypeOf: (value: Booking) => value.type === NAME,
  fields: {
    ...commonFields,
  },
});

export default BookingMulticity;
