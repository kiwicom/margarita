// @flow

import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { GraphQLDate } from 'graphql-iso-date';

export default new GraphQLInputObjectType({
  name: 'ItinerariesSearchInput',
  fields: {
    travelFrom: {
      type: GraphQLNonNull(GraphQLString),
    },
    dateFrom: {
      type: GraphQLNonNull(GraphQLDate),
      description: 'Search itineraries from this date',
    },
    dateTo: {
      type: GraphQLDate,
      description: 'Search itineraries up to this date',
    },
  },
});
