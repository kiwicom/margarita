// @flow

import { GraphQLObjectType, GraphQLInt } from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';

import Vehicle from './Vehicle';
import Transporter from './Transporter';
import GraphQLRouteStop from './RouteStop';

export default new GraphQLObjectType({
  name: 'Segment',
  fields: {
    id: GlobalID(({ id }) => id),
    transporter: {
      type: Transporter,
    },
    duration: {
      type: GraphQLInt,
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
