// @flow

import { GraphQLNonNull } from 'graphql';
import { type ConnectionArguments } from 'graphql-relay';
import {
  connectionFromArray,
  connectionArgs,
  connectionDefinitions,
} from '@kiwicom/graphql-utils';

import ItinerariesSearchInput from '../types/inputs/ItinerariesSearchInput';
import GraphQLItinerary from '../types/outputs/Itinerary';
import type { GraphqlContextType } from '../../../services/graphqlContext/GraphQLContext';
import type {
  ItinerariesType,
  ItinerariesSearchParameters,
} from '../Itinerary';

const { connectionType: ItinerariesConnection } = connectionDefinitions({
  nodeType: GraphQLItinerary,
});

type Args = {|
  +input: ItinerariesSearchParameters,
  ...$Exact<ConnectionArguments>,
|};

const Itineraries = {
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

    return connectionFromArray<ItinerariesType>(itineraries, args);
  },
};

export default Itineraries;
