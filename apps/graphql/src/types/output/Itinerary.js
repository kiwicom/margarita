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

// start - new structure

const PriceType = new GraphQLObjectType({
  name: 'PriceType',
  fields: {
    amount: { type: GraphQLInt },
    currency: { type: GraphQLString },
  },
});

const CountryType = new GraphQLObjectType({
  name: 'CountryType',
  fields: {
    id: GlobalID(({ id }) => id),
    name: { type: GraphQLString },
    code: { type: GraphQLString },
    slug: { type: GraphQLString },
    flagURL: { type: GraphQLString },
  },
});
const LocationType = new GraphQLObjectType({
  name: 'LocationType',
  fields: {
    id: GlobalID(({ id }) => id),
    locationId: { type: GraphQLString },
    name: { type: GraphQLString },
    timezone: { type: GraphQLString },
    country: { type: CountryType },
  },
});
const DateType = new GraphQLObjectType({
  name: 'DateType',
  fields: {
    local: { type: GraphQLDateTime },
    utc: { type: GraphQLDateTime },
  },
});
const VehicleType = new GraphQLObjectType({
  name: 'VehicleType',
  fields: {
    type: { type: GraphQLString },
    uniqueNo: { type: GraphQLString },
  },
});
const ProviderType = new GraphQLObjectType({
  name: 'ProviderType',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  },
});
const SegmentType = new GraphQLObjectType({
  name: 'SegmentType',
  fields: {
    arrivalTime: { type: DateType },
    departureTime: { type: DateType },
    destination: { type: LocationType },
    duration: { type: GraphQLInt },
    id: GlobalID(({ id }) => id),
    origin: { type: LocationType },
    provider: { type: ProviderType },
    vehicle: { type: VehicleType },
  },
});
const SectorType = new GraphQLObjectType({
  name: 'SectorType',
  fields: {
    arrivalTime: { type: DateType },
    connections: { type: new GraphQLList(SegmentType) },
    departureTime: { type: DateType },
    destination: { type: LocationType },
    duration: { type: GraphQLInt },
    id: GlobalID(({ id }) => id),
    origin: { type: LocationType },
    segments: { type: new GraphQLList(SegmentType) },
  },
});

const newItineraryStructure = {
  id: GlobalID(({ id }) => id),
  type: { type: GraphQLString },
  price: { type: PriceType },
  origin: { type: LocationType },
  destination: { type: LocationType },
  startTime: { type: DateType },
  endTime: { type: DateType },
  sectors: { type: new GraphQLList(SectorType) },
};

// end - new structure

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
    ...newItineraryStructure,
  },
});
