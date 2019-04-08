// @flow

import { GraphQLInputObjectType, GraphQLString, GraphQLInt } from 'graphql';

export default new GraphQLInputObjectType({
  name: 'HoldBags',
  description: 'Number of hold bags for a passenger for a given flight',
  fields: {
    flightID: {
      description: 'Flight ID for the bags checked',
      type: GraphQLString,
    },
    first: {
      description: 'Number of first hold bags for given passenger',
      type: GraphQLInt,
    },
    second: {
      description:
        'Number of second hold bags for given passenger (first has to have a value)',

      type: GraphQLInt,
    },
    third: {
      description:
        'Number of third hold bags for given passenger (first and second have to have a value)',
      type: GraphQLInt,
    },
  },
});
