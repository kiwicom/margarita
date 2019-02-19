// @flow

import { GraphQLObjectType } from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

export default new GraphQLObjectType({
  name: 'DateType',
  fields: {
    local: { type: GraphQLDateTime },
    utc: { type: GraphQLDateTime },
  },
});
