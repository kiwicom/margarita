// @flow

import { GraphQLInputObjectType, GraphQLNonNull } from 'graphql';

import ItineraryCommonInputFields from './common/ItineraryCommonInputFields';
import ItineraryCommonSearchInputFields from './common/ItineraryCommonSearchInputFields';

const ItineraryOneWayInput = new GraphQLInputObjectType({
  name: 'ItineraryOneWayInput',
  fields: ItineraryCommonInputFields,
});

export default new GraphQLInputObjectType({
  name: 'ItinerariesOneWaySearchInput',
  fields: {
    ...ItineraryCommonSearchInputFields,
    itinerary: {
      description: 'Itinerary for the One Way search',
      type: GraphQLNonNull(ItineraryOneWayInput),
    },
  },
});
