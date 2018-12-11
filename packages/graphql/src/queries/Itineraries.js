// @flow

import { GraphQLNonNull } from 'graphql';
import { type ConnectionArguments } from 'graphql-relay';
import {
  connectionFromArray,
  connectionArgs,
  connectionDefinitions,
} from '@kiwicom/graphql-utils';

import ItinerariesSearchInput from '../types/input/ItinerariesSearchInput';
import GraphQLItinerary from '../types/output/Itinerary';
import type { GraphqlContextType } from '../services/GraphQLContext';
import type {
  Itineraries,
  ItinerariesSearchParameters,
} from '../dataloaders/Itinerariesloader';

const { connectionType: ItinerariesConnection } = connectionDefinitions({
  nodeType: GraphQLItinerary,
});

type Args = {|
  +input: ItinerariesSearchParameters,
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
    const itineraries = await dataLoader.itineraries.load(args.input);

    return connectionFromArray<Itineraries>(itineraries, args);
  },
};
