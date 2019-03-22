// @flow

import { GraphQLInputObjectType, GraphQLNonNull } from 'graphql';
import { GraphQLDate } from 'graphql-iso-date';

export default new GraphQLInputObjectType({
  name: 'DateRange',
  fields: {
    start: {
      type: GraphQLNonNull(GraphQLDate),
      description: 'Start of the date range',
    },
    end: {
      type: GraphQLDate,
      description: 'End of the date range',
    },
  },
});
