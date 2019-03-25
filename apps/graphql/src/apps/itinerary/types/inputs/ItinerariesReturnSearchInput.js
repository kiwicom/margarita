// @flow

import { GraphQLInputObjectType, GraphQLNonNull } from 'graphql';

import ItineraryCommonInputFields from './common/ItineraryCommonInputFields';
import ItineraryCommonSearchInputFields from './common/ItineraryCommonSearchInputFields';
import DateRange from '../../../common/types/inputs/DateRange';

const ItineraryReturnInput = new GraphQLInputObjectType({
  name: 'ItineraryReturnInput',
  fields: {
    ...ItineraryCommonInputFields,
    inboundDate: {
      description: 'Date Range of flight back',
      type: GraphQLNonNull(DateRange),
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
