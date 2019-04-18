// @flow

import { GraphQLInterfaceType } from 'graphql';

import GraphQLRouteStop from './RouteStop';
import GraphQLSector from './Sector';

export default new GraphQLInterfaceType({
  name: 'ReturnInterface',
  description: 'Used for return type Booking and Itinerary',
  fields: {
    departure: {
      type: GraphQLRouteStop,
    },
    arrival: {
      type: GraphQLRouteStop,
    },
    outbound: {
      type: GraphQLSector,
    },
    inbound: {
      type: GraphQLSector,
    },
  },
});
