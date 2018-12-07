// @flow

import { GraphQLNonNull } from 'graphql';
import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  type ConnectionArguments,
} from 'graphql-relay';

import ItinerariesSearchInput from '../types/input/ItinerariesSearchInput';
import GraphQLItinerary from '../types/output/Itinerary';
import type { GraphqlContextType } from '../services/GraphQLContext';
import type { Itineraries } from '../dataloaders/Itinerariesloader';

const { connectionType: ItinerariesConnection } = connectionDefinitions({
  nodeType: GraphQLItinerary,
});

type Args = {|
  +input: {|
    +travelFrom: string,
    +dateFrom: Date,
    +dateTo?: Date,
  |},
  ...$Exact<ConnectionArguments>,
|};

export default {
  name: 'SearchItineraries',
  description: 'Query to fetch all itineraries(flights, busses, trains)',
  args: {
    input: {
      type: GraphQLNonNull(ItinerariesSearchInput),
    },
    ...connectionArgs,
  },
  type: ItinerariesConnection,
  resolve: async (_: mixed, args: Args, { dataLoader }: GraphqlContextType) => {
    const {
      input: { travelFrom, dateFrom, dateTo },
    } = args;
    const itineraries = await dataLoader.itineraries.load({
      travelFrom,
      dateFrom,
      dateTo,
    });

    return connectionFromArray<Itineraries>(itineraries, args); // TODO: Replace with connectionFromArray from grapqhl
  },
};
