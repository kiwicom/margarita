// @flow

import { GraphQLInputObjectType, GraphQLList, GraphQLString } from 'graphql';

export default new GraphQLInputObjectType({
  name: 'LocationItineraryInput',
  fields: {
    ids: {
      description: 'Locations IDs for travel',
      type: GraphQLList(GraphQLString),
    },
    slugs: {
      description: 'Locations slugs (URL) for travel',
      type: GraphQLList(GraphQLString),
    },
  },
});
