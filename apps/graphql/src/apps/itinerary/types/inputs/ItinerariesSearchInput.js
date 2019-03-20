// @flow

import { GraphQLInputObjectType } from 'graphql';
import { GraphQLDate } from 'graphql-iso-date';

import ItinerariesSharedSearchInput from './ItinerariesSharedSearchInput';

export default new GraphQLInputObjectType({
  name: 'ItinerariesSearchInput',
  fields: {
    ...ItinerariesSharedSearchInput.fields,
    returnDateFrom: {
      type: GraphQLDate,
      description: 'Search itineraries return from this date',
    },
    returnDateTo: {
      type: GraphQLDate,
      description: 'Search itineraries return up to this date',
    },
  },
});
