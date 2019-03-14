// @flow

import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'HttpError',
  fields: {
    code: {
      type: GraphQLNonNull(GraphQLInt),
    },
    message: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
});
