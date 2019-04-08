// @flow

import { GraphQLNonNull } from 'graphql';

import type { GraphqlContextType } from '../../../services/graphqlContext/GraphQLContext';
import ItineraryCheckInput from '../types/inputs/ItineraryCheckInput';
import type { ItineraryCheckParameters } from '../Itinerary';
import GraphQLItineraryInterface from '../types/outputs/ItineraryInterface';

type Args = {|
  +input: ItineraryCheckParameters,
|};

const Itinerary = {
  name: 'CheckItinerary',
  type: GraphQLItineraryInterface,
  description: 'Check if itinerary is valid and bookable',
  args: {
    input: {
      type: GraphQLNonNull(ItineraryCheckInput),
    },
  },
  resolve: async (_: mixed, args: Args, { dataLoader }: GraphqlContextType) => {
    const itinerary = await dataLoader.itinerary.load(args.input);
    return itinerary;
  },
};

export default Itinerary;
