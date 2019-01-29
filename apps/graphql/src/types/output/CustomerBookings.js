// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import globalID from '@kiwicom/graphql-global-id';

export default new GraphQLObjectType({
  name: 'CustomerBooking',
  description: 'The bookings for the customer',
  fields: {
    id: globalID(({ bid }) => bid),
    status: {
      type: GraphQLString,
    },
  },
});
