// @flow

import { GraphQLNonNull } from 'graphql';
import { connectionFromArray, connectionArgs } from '@kiwicom/graphql-utils';

import { type Args } from '../helpers/queryVariables';
import { ItinerariesConnection } from '../types/outputs/ItineraryConnection';
import ItinerariesOneWaySearchInput from '../types/inputs/ItinerariesOneWaySearchInput';
import type { GraphqlContextType } from '../../../services/graphqlContext/GraphQLContext';
import type {
  Itinerary,
  ItinerariesOneWaySearchParameters,
} from '../Itinerary';

const ItinerariesOneWay = {
  name: 'SearchOneWayItineraries',
  description:
    'Query to fetch all one way itineraries(flights, busses, trains)',
  args: {
    input: {
      type: GraphQLNonNull(ItinerariesOneWaySearchInput),
    },
    ...connectionArgs,
  },
  type: ItinerariesConnection,
  resolve: async (
    _: mixed,
    args: Args<ItinerariesOneWaySearchParameters>,
    { dataLoader }: GraphqlContextType,
  ) => {
    const itineraries = await dataLoader.itineraries.load(args.input);

    return connectionFromArray<Itinerary>(itineraries, args);
  },
};

export default ItinerariesOneWay;
