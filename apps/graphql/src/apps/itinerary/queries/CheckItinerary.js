// @flow

import { GraphQLNonNull } from 'graphql';

import type { GraphqlContextType } from '../../../services/graphqlContext/GraphQLContext';
import ItineraryCheckInput from '../types/inputs/ItineraryCheckInput';
import type { ItineraryCheckParameters } from '../Itinerary';
import { GraphQLItinerary } from '../types/outputs/Itinerary';

type Args = {|
  +input: ItineraryCheckParameters,
|};

const Itinerary = {
  name: 'CheckItinerary',
  type: GraphQLItinerary,
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
