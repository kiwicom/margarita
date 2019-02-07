// @flow

import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import Itineraries from './queries/Itineraries';
import Locations from './queries/Locations';
import CustomerBookings from './queries/CustomerBookings';
import BookingDetail from './queries/BookingDetail';
import BookingOneWay from './types/output/BookingOneWay';
import BookingMulticity from './types/output/BookingMulticity';
import BookingReturn from './types/output/BookingReturn';

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
  types: [BookingOneWay, BookingReturn, BookingMulticity],
});

export default schema;
