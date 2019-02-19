// @flow

import { GraphQLInterfaceType } from 'graphql';

import GraphQLRouteStop from './RouteStop';
import GraphQLBookingType from '../../../booking/types/enums/BookingType';

export default new GraphQLInterfaceType({
  name: 'FromToInterface',
  description:
    'This data needs to be accessed on a Trip and on BookingOneWay/Return/Multicity, so that we can re-use one component to show from to with correct icon',
  fields: {
    departure: {
      type: GraphQLRouteStop,
    },
    arrival: {
      type: GraphQLRouteStop,
    },
    type: {
      type: GraphQLBookingType,
    },
  },
});
