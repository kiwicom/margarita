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

const TripSegmentType = new GraphQLObjectType({
  name: 'TripSegment',
  fields: {
    city: { type: GraphQLString },
    cityCode: { type: GraphQLString },
    localTime: { type: GraphQLDateTime },
    utcTime: { type: GraphQLDateTime },
  },
});

const RouteType = new GraphQLObjectType({
  name: 'Route',
  fields: {
    arrival: { type: TripSegmentType },
    departure: { type: TripSegmentType },
    airline: { type: GraphQLString },
    id: { type: GraphQLString },
  },
});

const PriceType = new GraphQLObjectType({
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
    price: { type: PriceType },
    route: { type: new GraphQLList(RouteType) },
    routes: { type: new GraphQLList(new GraphQLList(GraphQLString)) },
  },
});
