// @flow

import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import { GraphQLDate } from 'graphql-iso-date';

import PassengersInput from './PassengersInput';

export default new GraphQLInputObjectType({
  name: 'ItinerariesSearchInput',
  fields: {
    travelFrom: {
      type: GraphQLNonNull(GraphQLString),
    },
    travelTo: {
      type: GraphQLString,
    },
    dateFrom: {
      type: GraphQLNonNull(GraphQLDate),
      description: 'Search itineraries from this date',
    },
    dateTo: {
      type: GraphQLDate,
      description: 'Search itineraries up to this date',
    },
    returnDateFrom: {
      type: GraphQLDate,
      description: 'Search itineraries return from this date',
    },
    returnDateTo: {
      type: GraphQLDate,
      description: 'Search itineraries return up to this date',
    },
    passengers: {
      type: PassengersInput,
      description: 'Number of children, adults and infants travelling',
    },
  },
});
