// @flow

import { GraphQLObjectType } from 'graphql';

import GraphQLDateType from './DateType';
import GraphQLLocation from '../../../location/types/outputs/Location';
import type { RouteStop } from '../../CommonTypes';
import type { GraphqlContextType } from '../../../../services/graphqlContext/GraphQLContext';

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
        const stop = await dataLoader.locations.byID.load({ code });
        return stop;
      },
    },
  },
});
