// @flow

import { GraphQLObjectType } from 'graphql';
import { TRIP_TYPES } from '@kiwicom/margarita-config';
import { head, last } from 'ramda';

import type { Itinerary } from '../../Itinerary';
import ItineraryInterface, { commonFields } from './ItineraryInterface';
import GraphQLSector from '../../../common/types/outputs/Sector';
import getStopoverDuration from '../../helpers/stopoverDuration';
import FromToInterface from '../../../common/types/outputs/FromToInterface';
import ReturnInterface from '../../../common/types/outputs/ReturnInterface';

export default new GraphQLObjectType({
  name: 'ItineraryReturn',
  description:
    'Itinerary from A to B with return trip, and with possible stopovers',
  interfaces: [ItineraryInterface, FromToInterface, ReturnInterface],
  isTypeOf: ({ type }: Itinerary) => type === TRIP_TYPES.RETURN,
  fields: {
    ...commonFields,
    outbound: {
      type: GraphQLSector,
      resolve: ({ sectors }: Itinerary) => {
        const outbound = head(sectors ?? []);
        if (outbound == null) {
          return null;
        }

        return {
          ...outbound,
          stopoverDuration: null,
        };
      },
    },
    inbound: {
      type: GraphQLSector,
      resolve: ({ sectors }: Itinerary) => {
        const inbound = last(sectors ?? []);
        const outbound = head(sectors ?? []);

        if (inbound == null) {
          return null;
        }

        return {
          ...inbound,
          stopoverDuration: getStopoverDuration(inbound, outbound),
        };
      },
    },
  },
});
