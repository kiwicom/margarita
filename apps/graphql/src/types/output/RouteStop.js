// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';

import GraphQLSegmentTime from './SegmentTime';

export default new GraphQLObjectType({
  name: 'RouteStop',
  description: 'Departure or arrival for a segment',
  fields: {
    cityName: {
      type: GraphQLString,
    },
    cityId: {
      type: GraphQLString,
    },
    time: {
      type: GraphQLSegmentTime,
    },
  },
});
