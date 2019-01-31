// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';

export default new GraphQLObjectType({
  name: 'LocationArea',
  fields: {
    id: GlobalID(({ id }) => id),
    locationId: { type: GraphQLString },
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    code: { type: GraphQLString },
    flagURL: { type: GraphQLString },
  },
});
