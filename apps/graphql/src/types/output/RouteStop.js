// @flow

import { GraphQLObjectType } from 'graphql';

import GraphQLDateType from './DateType';
import GraphQLLocation from './Location';
import type { RouteStop } from '../../dataloaders/bookingsLoader/BookingFlowTypes';
import type { GraphqlContextType } from '../../services/GraphQLContext';

export default new GraphQLObjectType({
  name: 'RouteStop',
  description: 'Departure or arrival for a segment or sector',
  fields: {
    time: {
      description:
        'Contains utc and local time for arrival/departure of the stop',
      type: GraphQLDateType,
    },
    stop: {
      description:
        'This could be bus stop, trainstation, airport, anywhere the Sector or segment comes to a stop',
      type: GraphQLLocation,
      resolve: async (
        { code }: RouteStop,
        _: mixed,
        { dataLoader }: GraphqlContextType,
      ) => {
        if (code == null) {
          return null;
        }
        const stops = await dataLoader.locations.load({ code });
        if (!Array.isArray(stops) || stops.length < 1) {
          return null;
        }
        return stops[0];
      },
    },
  },
});
