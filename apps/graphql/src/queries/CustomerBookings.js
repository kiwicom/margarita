// @flow

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
} from '@kiwicom/graphql-utils';
import { type ConnectionArguments } from 'graphql-relay';

import type { Booking } from '../dataloaders/BookingsLoader';
import GraphQLCustomerBookings from '../types/output/CustomerBookings';
import type { GraphqlContextType } from '../services/GraphQLContext';

const { connectionType: AllBookingsConnection } = connectionDefinitions({
  nodeType: GraphQLCustomerBookings,
});

type Args = {|
  ...$Exact<ConnectionArguments>,
|};

export default {
  type: AllBookingsConnection,
  description: 'Retrieve all your bookings.',
  args: {
    ...connectionArgs,
  },
  resolve: (
    ancestor: mixed,
    args: Args,
    { dataLoader }: GraphqlContextType,
  ) => {
    const bookings = dataLoader.bookings.load();

    return connectionFromArray<Booking>(bookings, args);
  },
};
