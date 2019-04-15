// @flow

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
} from '@kiwicom/graphql-utils';
import { type ConnectionArguments } from 'graphql-relay';

import type { Booking } from '../manageMyBooking';
import type { GraphqlContextType } from '../../../services/graphqlContext/GraphQLContext';
import GraphQLBookingInterface from '../types/outputs/BookingInterface';

const { connectionType: AllBookingsConnection } = connectionDefinitions({
  nodeType: GraphQLBookingInterface,
});

type Args = {|
  ...$Exact<ConnectionArguments>,
|};

const CustomerBookings = {
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

export default CustomerBookings;
