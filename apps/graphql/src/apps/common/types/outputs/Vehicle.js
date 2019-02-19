// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'Vehicle',
  fields: {
    type: { type: GraphQLString },
    uniqueNo: { type: GraphQLString },
  },
});
