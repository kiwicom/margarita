// @flow

import { GraphQLInputObjectType, GraphQLInt } from 'graphql';

export default new GraphQLInputObjectType({
  name: 'NightsInDestination',
  fields: {
    from: {
      type: GraphQLInt,
      description: 'Minimum nights in destination',
    },
    to: {
      type: GraphQLInt,
      description: 'Maximum nights in destination',
    },
  },
});
