// @flow

import { GraphQLObjectType } from 'graphql';
import { TRIP_TYPES } from '@kiwicom/margarita-config';
import { head } from 'ramda';

import type { Itinerary } from '../../Itinerary';
import ItineraryInterface, { commonFields } from './ItineraryInterface';
import GraphQLSector from '../../../common/types/outputs/Sector';

export default new GraphQLObjectType({
  name: 'ItineraryOneWay',
  description:
    'Itinerary from A to B with no return, but with possible stopovers',
  interfaces: [ItineraryInterface],
  isTypeOf: ({ type }: Itinerary) => type === TRIP_TYPES.ONEWAY,
  fields: {
    ...commonFields,
    sector: {
      type: GraphQLSector,
      resolve: ({ sectors }: Itinerary) => {
        const sector = head(sectors ?? []);
        if (sector == null) {
          return null;
        }
        return {
          ...sector,
          stopoverDuration: null,
        };
      },
    },
  },
});
