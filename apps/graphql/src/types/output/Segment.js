// @flow

import { GraphQLObjectType, GraphQLInt } from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';

import DateType from './DateType';
import Vehicle from './Vehicle';
import Transporter from './Transporter';
import Location from './Location';
import GraphQLRouteStop from './RouteStop';

export default new GraphQLObjectType({
  name: 'Segment',
  fields: {
    id: GlobalID(({ id }) => id),
    arrivalTime: {
      type: DateType,
    },
    departureTime: {
      type: DateType,
    },
    destination: {
      type: Location,
    },
    duration: {
      type: GraphQLInt,
    },
    origin: {
      type: Location,
    },
    transporter: {
      type: Transporter,
    },
    vehicle: {
      type: Vehicle,
    },
    departure: {
      type: GraphQLRouteStop,
    },
    arrival: {
      type: GraphQLRouteStop,
    },
  },
});
