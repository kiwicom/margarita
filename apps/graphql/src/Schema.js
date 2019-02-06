// @flow

import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import Itineraries from './queries/Itineraries';
import Locations from './queries/Locations';
import CustomerBookings from './queries/CustomerBookings';
import BookingDetail from './queries/BookingDetail';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      bookingDetail: BookingDetail,
      customerBookings: CustomerBookings,
      locationsByTerm: Locations,
      searchItineraries: Itineraries,
    },
  }),
});

export default schema;
