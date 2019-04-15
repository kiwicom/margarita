// @flow

import { GraphQLID, GraphQLNonNull } from 'graphql';

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
    const booking = dataLoader.booking.load(args.id);

    return booking;
  },
};

export default BookingDetail;
