// @flow

import { GraphQLID, GraphQLNonNull } from 'graphql';
import { fromGlobalId } from '@kiwicom/graphql-global-id';

import GraphQLCustomerBooking from '../types/output/CustomerBookings';
import type { GraphqlContextType } from '../services/GraphQLContext';

type Args = {|
  +id: string,
|};

export default {
  type: GraphQLCustomerBooking,
  description: 'Find a booking by its id',
  args: {
    id: {
      type: GraphQLNonNull(GraphQLID),
    },
  },

  resolve: (
    ancestor: mixed,
    args: Args,
    { dataLoader }: GraphqlContextType,
  ) => {
    const bookingId = parseInt(fromGlobalId(args.id), 10);
    const bookings = dataLoader.bookings.load();
    const booking = bookings.find(booking => booking.bid === bookingId);

    return booking;
  },
};
