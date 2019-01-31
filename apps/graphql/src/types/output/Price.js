// @flow

import { GraphQLObjectType, GraphQLString, GraphQLFloat } from 'graphql';

export default new GraphQLObjectType({
  name: 'Price',
  fields: {
    amount: { type: GraphQLFloat },
    currency: { type: GraphQLString },
  },
});
