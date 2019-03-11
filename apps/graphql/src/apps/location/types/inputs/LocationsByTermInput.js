// @flow

import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import GraphQLLocationType from '../enums/LocationType';

export default new GraphQLInputObjectType({
  name: 'LocationsByTermInput',
  fields: {
    term: {
      type: GraphQLNonNull(GraphQLString),
    },
    types: {
      description: 'Desired location type output',
      type: GraphQLList(GraphQLLocationType),
    },
  },
});
