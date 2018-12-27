// @flow

import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';
import { GraphQLDateTime } from 'graphql-iso-date';

export type Itinerary = {|
  +id: string,
|};

const routesType = new GraphQLObjectType({
  name: 'Routes',
  fields: {
    airline: { type: GraphQLString },
    cityFrom: { type: GraphQLString },
    cityTo: { type: GraphQLString },
    id: { type: GraphQLString },
    localArrival: { type: GraphQLDateTime },
    utcArrival: { type: GraphQLDateTime },
    localDeparture: {
      type: GraphQLDateTime,
    },
    utcDeparture: { type: GraphQLDateTime },
  },
});

export default new GraphQLObjectType({
  name: 'Itinerary',
  fields: {
    currency: { type: GraphQLString },
    id: GlobalID(({ id }) => id),
    price: { type: GraphQLInt },
    flyFrom: { type: GraphQLString },
    flyTo: { type: GraphQLString },
    localDeparture: { type: GraphQLString },
    localArrival: { type: GraphQLString },
    routes: { type: new GraphQLList(routesType) },
    // TODO: Add fields as needed
  },
});
