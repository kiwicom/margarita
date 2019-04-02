// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'Carrier',
  fields: {
    name: { type: GraphQLString },
    code: { type: GraphQLString },
  },
});
