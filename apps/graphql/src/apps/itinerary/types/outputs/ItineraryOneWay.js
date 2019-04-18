// @flow

import { GraphQLObjectType } from 'graphql';
import { TRIP_TYPES } from '@kiwicom/margarita-config';
import { head } from 'ramda';

import type { Itinerary } from '../../Itinerary';
import ItineraryInterface, { commonFields } from './ItineraryInterface';
import GraphQLSector from '../../../common/types/outputs/Sector';
import FromToInterface from '../../../common/types/outputs/FromToInterface';
import OneWayInterface from '../../../common/types/outputs/OneWayInterface';

export default new GraphQLObjectType({
  name: 'ItineraryOneWay',
  description:
    'Itinerary from A to B with no return, but with possible stopovers',
  interfaces: [ItineraryInterface, FromToInterface, OneWayInterface],
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
