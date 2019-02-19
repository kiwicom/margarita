// @flow

import { GraphQLObjectType, GraphQLInt } from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';

import GraphQLVehicle from './Vehicle';
import GraphQLTransporter from './Transporter';
import GraphQLRouteStop from './RouteStop';

export default new GraphQLObjectType({
  name: 'Segment',
  fields: {
    id: GlobalID(({ id }) => id),
    transporter: {
      type: GraphQLTransporter,
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
