// @flow

import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

export default new GraphQLInputObjectType({
  name: 'LocationsByTermInput',
  fields: {
    term: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
});
