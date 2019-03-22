// @flow

import { GraphQLNonNull } from 'graphql';
import { connectionFromArray, connectionArgs } from '@kiwicom/graphql-utils';

import { type Args, ItinerariesConnection } from '../helpers/queryVariables';
import ItinerariesSearchInput from '../types/inputs/ItinerariesSearchInput';
import type { GraphqlContextType } from '../../../services/graphqlContext/GraphQLContext';
import type { Itinerary, ItinerariesSearchParameters } from '../Itinerary';

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
  resolve: async (
    _: mixed,
    args: Args<ItinerariesSearchParameters>,
    { dataLoader }: GraphqlContextType,
  ) => {
    const itineraries = await dataLoader.itineraries.load(args.input);

    return connectionFromArray<Itinerary>(itineraries, args);
  },
};

export default Itineraries;
