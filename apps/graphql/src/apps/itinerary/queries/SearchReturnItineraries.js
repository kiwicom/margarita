// @flow

import { GraphQLNonNull } from 'graphql';
import { connectionFromArray, connectionArgs } from '@kiwicom/graphql-utils';

import { type Args } from '../helpers/queryVariables';
import { ItinerariesConnection } from '../types/outputs/ItineraryConnection';
import ItinerariesReturnSearchInput from '../types/inputs/ItinerariesReturnSearchInput';
import type { GraphqlContextType } from '../../../services/graphqlContext/GraphQLContext';
import type {
  Itinerary,
  ItinerariesReturnSearchParameters,
} from '../Itinerary';

const ItinerariesReturn = {
  name: 'SearchReturnItineraries',
  description: 'Query to fetch all return itineraries(flights, busses, trains)',
  args: {
    input: {
      type: GraphQLNonNull(ItinerariesReturnSearchInput),
    },
    ...connectionArgs,
  },
  type: ItinerariesConnection,
  resolve: async (
    _: mixed,
    args: Args<ItinerariesReturnSearchParameters>,
    { dataLoader }: GraphqlContextType,
  ) => {
    const itineraries = await dataLoader.itineraries.load(args.input);

    return connectionFromArray<Itinerary>(itineraries, args);
  },
};

export default ItinerariesReturn;
