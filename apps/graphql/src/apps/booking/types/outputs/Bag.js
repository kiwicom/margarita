// @flow

import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

import GraphQLBagType from './BagType';

export default new GraphQLObjectType({
  name: 'Bag',
  description: "Passenger's bag type and quantity",
  fields: {
    type: {
      type: GraphQLBagType,
    },
    quantity: {
      type: GraphQLInt,
    },
    dimensions: {
      type: GraphQLString,
    },
  },
});
