// @flow

import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

export default new GraphQLObjectType({
  name: 'HttpResponseError',
  fields: {
    code: {
      type: GraphQLInt,
    },
    message: {
      type: GraphQLString,
    },
  },
});
