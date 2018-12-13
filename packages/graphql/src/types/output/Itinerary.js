// @flow

import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';

export type Itinerary = {|
  +id: string,
|};

export default new GraphQLObjectType({
  name: 'Itinerary',
  fields: {
    id: GlobalID(({ id }) => id),
    price: { type: GraphQLInt },
    flyFrom: { type: GraphQLString },
    flyTo: { type: GraphQLString },
    localDeparture: { type: GraphQLString },
    localArrival: { type: GraphQLString },
    // TODO: Add fields as needed
  },
});
