// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';

export default new GraphQLObjectType({
  name: 'LocationArea',
  fields: {
    locationId: GlobalID(({ id }) => id),
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    code: { type: GraphQLString },
  },
});
