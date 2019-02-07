// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';

import LocationArea from './LocationArea';
import type { Location } from '../../dataloaders/LocationsloaderTypes';

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
