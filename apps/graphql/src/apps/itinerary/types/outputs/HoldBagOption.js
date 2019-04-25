// @flow

import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

import GraphQLPrice from '../../../common/types/outputs/Price';

export default new GraphQLObjectType({
  name: 'HoldBagOption',
  fields: {
    quantity: { type: GraphQLInt },
    price: { type: GraphQLPrice },
    dimensions: { type: GraphQLString },
    weight: { type: GraphQLString },
  },
});
