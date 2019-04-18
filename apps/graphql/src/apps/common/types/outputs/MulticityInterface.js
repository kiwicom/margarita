// @flow

import { GraphQLInterfaceType, GraphQLList } from 'graphql';

import GraphQLRouteStop from './RouteStop';
import GraphQLSector from './Sector';

export default new GraphQLInterfaceType({
  name: 'MulticityInterface',
  description: 'Used for multicity type Booking and Itinerary',
  fields: {
    departure: {
      type: GraphQLRouteStop,
    },
    arrival: {
      type: GraphQLRouteStop,
    },
    sectors: {
      type: GraphQLList(GraphQLSector),
    },
  },
});
