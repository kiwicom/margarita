// @flow

import { GraphQLObjectType } from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

export default new GraphQLObjectType({
  name: 'SegmentTime',
  description: 'Time of the segment in utc and local time.',
  fields: {
    utc: {
      type: GraphQLDateTime,
    },
    local: {
      type: GraphQLDateTime,
    },
  },
});
