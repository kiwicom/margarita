// @flow

import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
} from 'graphql';
import globalID from '@kiwicom/graphql-global-id';

export default new GraphQLObjectType({
  name: 'Passenger',
  description: 'Passenger details',
  fields: {
    id: globalID(({ id }) => id),
    bags: {
      type: GraphQLInt,
    },
    birthday: {
      type: GraphQLString,
    },
    category: {
      type: GraphQLString,
    },
    firstname: {
      type: GraphQLString,
    },
    insuranceType: {
      type: GraphQLString,
    },
    lastname: {
      type: GraphQLString,
    },
    nationality: {
      type: GraphQLString,
    },
    title: {
      type: GraphQLString,
    },
    visaRequired: {
      type: GraphQLBoolean,
    },
  },
});
