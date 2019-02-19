// @flow

import { GraphQLInputObjectType, GraphQLInt } from 'graphql';

export default new GraphQLInputObjectType({
  name: 'PassengersInput',
  fields: {
    adults: {
      type: GraphQLInt,
    },
    children: {
      type: GraphQLInt,
    },
    infants: {
      type: GraphQLInt,
    },
  },
});
