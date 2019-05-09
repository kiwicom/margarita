// @flow

import { GraphQLInputObjectType, GraphQLNonNull } from 'graphql';

import ItineraryCommonInputFields from './common/ItineraryCommonInputFields';
import ItineraryCommonSearchInputFields from './common/ItineraryCommonSearchInputFields';
import DateRange from '../../../common/types/inputs/DateRange';
import NightsInDestination from '../../../common/types/inputs/NightsInDestination';

const ItineraryReturnInput = new GraphQLInputObjectType({
  name: 'ItineraryReturnInput',
  fields: {
    ...ItineraryCommonInputFields,
    inboundDate: {
      description: 'Date Range of flight back',
      type: DateRange,
    },
    nightsInDestination: {
      description: 'Nights in destination of flight back',
      type: NightsInDestination,
    },
  },
});

export default new GraphQLInputObjectType({
  name: 'ItinerariesReturnSearchInput',
  fields: {
    ...ItineraryCommonSearchInputFields,
    itinerary: {
      description: 'Itinerary for the return search',
      type: GraphQLNonNull(ItineraryReturnInput),
    },
  },
});
