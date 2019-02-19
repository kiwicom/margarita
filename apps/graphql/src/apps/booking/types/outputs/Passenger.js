// @flow

import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';
import globalID from '@kiwicom/graphql-global-id';

import GraphQLBagType from './Bag';

export default new GraphQLObjectType({
  name: 'Passenger',
  description: 'Passenger details',
  fields: {
    id: globalID(({ id }) => id),
    bags: {
      type: GraphQLList(GraphQLBagType),
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
