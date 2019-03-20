// @flow

import { GraphQLNonNull, GraphQLString, GraphQLList } from 'graphql';
import { GraphQLDate } from 'graphql-iso-date';

import PassengersInput from './PassengersInput';

export default {
  fields: {
    travelFrom: {
      description: 'Locations IDs for travel from (origin)',
      type: GraphQLNonNull(GraphQLList(GraphQLString)),
    },
    travelTo: {
      description: 'Locations IDs for travel to (destination)',
      type: GraphQLList(GraphQLString),
    },
    dateFrom: {
      type: GraphQLNonNull(GraphQLDate),
      description: 'Search itineraries from this date',
    },
    dateTo: {
      type: GraphQLDate,
      description: 'Search itineraries up to this date',
    },
    passengers: {
      type: PassengersInput,
      description: 'Number of children, adults and infants travelling',
    },
  },
};
