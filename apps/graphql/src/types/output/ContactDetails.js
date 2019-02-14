// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'ContactDetails',
  description: 'Bookings contact email and phone',
  fields: {
    email: {
      type: GraphQLString,
    },
    phone: {
      type: GraphQLString,
    },
  },
});
