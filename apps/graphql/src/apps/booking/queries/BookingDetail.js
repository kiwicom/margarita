// @flow

import { GraphQLID, GraphQLNonNull } from 'graphql';
import { fromGlobalId } from '@kiwicom/graphql-global-id';

import type { GraphqlContextType } from '../../../services/graphqlContext/GraphQLContext';
import BookingInterface from '../types/outputs/BookingInterface';

type Args = {|
  +id: string,
|};

const BookingDetail = {
  type: BookingInterface,
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
    const bookingId = fromGlobalId(args.id);
    const booking = dataLoader.booking.load(bookingId);

    return booking;
  },
};

export default BookingDetail;
