// @flow

import { GraphQLObjectType, GraphQLInt, GraphQLList } from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';
import { head } from 'ramda';

import GraphQLVehicle from './Vehicle';
import GraphQLTransporter from './Transporter';
import GraphQLRouteStop from './RouteStop';
import GraphQLCoordinate from './Coordinate';
import type { GraphqlContextType } from '../../../../services/graphqlContext/GraphQLContext';
import type { Segment } from '../../../itinerary/Itinerary';
import type { Location } from '../../../location/Location';

const getCoordinateFromLocation = (location: ?Location) => {
  if (location == null) {
    return null;
  }
  return {
    lat: location.coordinates?.lat,
    lng: location.coordinates?.lng,
  };
};

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
    stopCoordinates: {
      type: GraphQLList(GraphQLCoordinate),
      description: 'A list containing, departure and arrival gps-coordinates',
      resolve: async (
        { arrival, departure }: Segment,
        _: mixed,
        { dataLoader }: GraphqlContextType,
      ) => {
        const codes = [
          { code: departure?.code ?? '' },
          { code: arrival?.code ?? '' },
        ];
        const locations = await dataLoader.locations.loadMany(codes);

        if (locations.length < 2) {
          // We ask for 2 locations results, if we get less, there is an error
          return null;
        }

        return [
          getCoordinateFromLocation(head(locations[0])),
          getCoordinateFromLocation(head(locations[1])),
        ];
      },
    },
  },
});
