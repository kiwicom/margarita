// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';

import LocationArea from './LocationArea';
import GraphQLCoordinate from '../../../common/types/outputs/Coordinate';
import GraphQLLocationTypeEnum from '../enums/LocationType';
import type { Location } from '../../Location';

export default new GraphQLObjectType({
  name: 'Location',
  fields: {
    id: GlobalID(({ id }) => id),
    name: {
      type: GraphQLString,
    },
    slug: {
      type: GraphQLString,
    },
    locationId: {
      type: GraphQLString,
    },
    timezone: {
      type: GraphQLString,
    },
    country: {
      type: LocationArea,
    },
    city: {
      type: LocationArea,
    },
    coordinates: {
      type: GraphQLCoordinate,
    },
    type: {
      type: GraphQLLocationTypeEnum,
    },
    countryFlagURL: {
      type: GraphQLString,
      resolve: ({ country }: Location): string => {
        const locationId = country?.locationId;
        if (locationId) {
          return `https://images.kiwi.com/flags/32x32/${locationId.toLowerCase()}.png`;
        }
        return 'https://images.kiwi.com/flags/32x32/anywhere.png';
      },
    },
  },
});
