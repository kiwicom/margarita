// @flow

import { GraphQLObjectType, GraphQLList } from 'graphql';

import BookingInterface, { commonFields } from './BookingInterface';
import type { Booking } from '../../manageMyBooking';
import GraphQLSector from '../../../common/types/outputs/Sector';
import FromToInterface from '../../../common/types/outputs/FromToInterface';
import MulticityInterface from '../../../common/types/outputs/MulticityInterface';

const NAME = 'BookingMulticity';

const BookingMulticity = new GraphQLObjectType({
  name: NAME,
  description: 'Booking from A to B, B to C and so on, with possible stopovers',
  interfaces: [BookingInterface, FromToInterface, MulticityInterface],
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
