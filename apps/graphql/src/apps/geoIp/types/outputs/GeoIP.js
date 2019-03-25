// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';

import GraphQLCoordinate from '../../../common/types/outputs/Coordinate';

export default new GraphQLObjectType({
  name: 'GeoIP',
  fields: {
    isoCountryCode: {
      type: GraphQLString,
      description: 'ISO country code',
    },
    coordinates: {
      type: GraphQLCoordinate,
      description: 'Coordinates',
      resolve: res => ({
        lat: res.latitude,
        lng: res.longitude,
      }),
    },
  },
});
