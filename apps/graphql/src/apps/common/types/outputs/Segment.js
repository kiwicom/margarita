// @flow

import { GraphQLObjectType, GraphQLInt } from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';

import GraphQLVehicle from './Vehicle';
import GraphQLCarrier from './Carrier';
import GraphQLRouteStop from './RouteStop';

export default new GraphQLObjectType({
  name: 'Segment',
  fields: {
    id: GlobalID(({ id }) => id),
    carrier: {
      type: GraphQLCarrier,
    },
    duration: {
      type: GraphQLInt,
    },
    vehicle: {
      type: GraphQLVehicle,
    },
    departure: {
      type: GraphQLRouteStop,
    },
    arrival: {
      type: GraphQLRouteStop,
    },
  },
});
