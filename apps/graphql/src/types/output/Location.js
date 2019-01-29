// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';

import LocationArea from './LocationArea';

export default new GraphQLObjectType({
  name: 'Location',
  fields: {
    id: GlobalID(({ id }) => id),
    name: { type: GraphQLString },
    slug: { type: GraphQLString },
    locationId: { type: GraphQLString },
    timezone: { type: GraphQLString },
    country: { type: LocationArea },
  },
});
