// @flow

import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';
import { GraphQLDateTime } from 'graphql-iso-date';

import Price from './Price';
import Sector from './Sector';
import Location from './Location';
import DateType from './DateType';

export type Itinerary = {|
  +id: string,
|};

// @TODO delete deprecated structure in the future
const TripSegment = new GraphQLObjectType({
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
    arrival: { type: TripSegment },
    departure: { type: TripSegment },
    airline: { type: GraphQLString },
    id: { type: GraphQLString },
  },
});

export default new GraphQLObjectType({
  name: 'Itinerary',
  fields: {
    flyFrom: {
      type: GraphQLString,
      deprecationReason: 'We changed the structure. Type will be deleted soon',
    },
    flyTo: {
      type: GraphQLString,
      deprecationReason: 'We changed the structure. Type will be deleted soon',
    },
    localDeparture: {
      type: GraphQLString,
      deprecationReason: 'We changed the structure. Type will be deleted soon',
    },
    localArrival: {
      type: GraphQLString,
      deprecationReason: 'We changed the structure. Type will be deleted soon',
    },
    route: {
      type: new GraphQLList(RouteType),
      deprecationReason: 'We changed the structure. Type will be deleted soon',
    },
    routes: {
      type: new GraphQLList(new GraphQLList(GraphQLString)),
      deprecationReason: 'We changed the structure. Type will be deleted soon',
    },
    destination: { type: Location },
    endTime: { type: DateType },
    id: GlobalID(({ id }) => id),
    origin: { type: Location },
    price: { type: Price },
    sectors: { type: new GraphQLList(Sector) },
    startTime: { type: DateType },
    type: { type: GraphQLString },
  },
});
