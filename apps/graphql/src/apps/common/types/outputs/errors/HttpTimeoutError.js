// @flow

import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

export default new GraphQLObjectType({
  name: 'HttpTimeoutError',
  fields: {
    code: {
      type: GraphQLInt,
    },
    message: {
      type: GraphQLString,
    },
  },
});
