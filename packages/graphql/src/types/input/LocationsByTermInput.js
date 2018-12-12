// @flow

import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { GraphQLDate } from 'graphql-iso-date';

export default new GraphQLInputObjectType({
  name: 'LocationByTermInput',
  fields: {
    term: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
});
