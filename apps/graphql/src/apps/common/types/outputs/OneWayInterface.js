// @flow

import { GraphQLInterfaceType } from 'graphql';

import GraphQLRouteStop from './RouteStop';
import GraphQLSector from './Sector';

export default new GraphQLInterfaceType({
  name: 'OneWayInterface',
  description: 'Used for one-way type Booking and Itinerary',
  fields: {
    departure: {
      type: GraphQLRouteStop,
    },
    arrival: {
      type: GraphQLRouteStop,
    },
    sector: {
      type: GraphQLSector,
    },
  },
});
