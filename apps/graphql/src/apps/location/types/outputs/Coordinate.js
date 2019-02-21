// @flow

import { GraphQLObjectType, GraphQLFloat } from 'graphql';

export default new GraphQLObjectType({
  name: 'Coordinate',
  description: 'GPS coordinate',
  fields: {
    lat: {
      type: GraphQLFloat,
    },
    lng: {
      type: GraphQLFloat,
    },
  },
});
