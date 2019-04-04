// @flow

import { GraphQLObjectType } from 'graphql';
import { TRIP_TYPES } from '@kiwicom/margarita-config';

import type { Itinerary } from '../../Itinerary';
import ItineraryInterface, { commonFields } from './ItineraryInterface';

export default new GraphQLObjectType({
  name: 'ItineraryReturn',
  description:
    'Itinerary from A to B with return trip, and with possible stopovers',
  interfaces: [ItineraryInterface],
  isTypeOf: ({ type }: Itinerary) => type === TRIP_TYPES.RETURN,
  fields: {
    ...commonFields,
  },
});
