// @flow

import { GraphQLInterfaceType, GraphQLString, GraphQLBoolean } from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';

import GraphQLPrice from '../../../common/types/outputs/Price';
import GraphQLRouteStop from '../../../common/types/outputs/RouteStop';

export const commonFields = {
  id: GlobalID(({ id }) => id),
  price: { type: GraphQLPrice },
  arrival: {
    type: GraphQLRouteStop,
  },
  departure: {
    type: GraphQLRouteStop,
  },
  bookingToken: { type: GraphQLString },
  isChecked: {
    type: GraphQLBoolean,
    description: 'All segments successfully checked',
  },
  isValid: {
    type: GraphQLBoolean,
    description: 'Itinerary is valid (exists and is not sold-out or cancelled)',
  },
};

export default new GraphQLInterfaceType({
  name: 'ItineraryInterface',
  fields: commonFields,
});
