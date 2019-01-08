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

const tripSectorType = new GraphQLObjectType({
  name: 'TripSector',
  fields: {
    city: { type: GraphQLString },
    cityCode: { type: GraphQLString },
    localTime: { type: GraphQLDateTime },
    utcTime: { type: GraphQLDateTime },
  },
});

const routeType = new GraphQLObjectType({
  name: 'Route',
  fields: {
    arrival: { type: tripSectorType },
    departure: { type: tripSectorType },
    airline: { type: GraphQLString },
    id: { type: GraphQLString },
  },
});

const priceType = new GraphQLObjectType({
  name: 'Price',
  fields: {
    amount: { type: GraphQLInt },
    currency: { type: GraphQLString },
  },
});

export default new GraphQLObjectType({
  name: 'Itinerary',
  fields: {
    id: GlobalID(({ id }) => id),
    flyFrom: { type: GraphQLString },
    flyTo: { type: GraphQLString },
    localDeparture: { type: GraphQLString },
    localArrival: { type: GraphQLString },
    price: { type: priceType },
    route: { type: new GraphQLList(routeType) },
    routes: { type: new GraphQLList(new GraphQLList(GraphQLString)) },
  },
});
