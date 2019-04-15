// @flow

import { GraphQLObjectType } from 'graphql';

import BookingInterface, { commonFields } from './BookingInterface';
import type { Booking } from '../../manageMyBooking';
import GraphQLSector from '../../../common/types/outputs/Sector';
import FromToInterface from '../../../common/types/outputs/FromToInterface';

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
