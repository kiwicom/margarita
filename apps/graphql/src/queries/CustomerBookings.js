// @flow

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
} from '@kiwicom/graphql-utils';
import { type ConnectionArguments } from 'graphql-relay';

import AllBookings from '../datasets/AllBookings.json';
import GraphQLCustomerBookings from '../types/output/CustomerBookings';

const { connectionType: AllBookingsConnection } = connectionDefinitions({
  nodeType: GraphQLCustomerBookings,
});

type Args = {|
  ...$Exact<ConnectionArguments>,
|};

type CustomerBookings = {|
  +bid: number,
|};

export default {
  type: AllBookingsConnection,
  description: 'Retrieve all your bookings.',
  args: {
    ...connectionArgs,
  },
  resolve: (ancestor: mixed, args: Args) => {
    const bookings = AllBookings;

    return connectionFromArray<CustomerBookings>(bookings, args);
  },
};
