// @flow

import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
} from 'graphql';
import { GraphQLDate } from 'graphql-iso-date';

import PassengersInput from './common/PassengersInput';

export default new GraphQLInputObjectType({
  name: 'ItinerariesSearchInput',
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
