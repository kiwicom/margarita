// @flow

import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import SearchItineraries from './apps/itinerary/queries/SearchItineraries';
import LocationsByTerm from './apps/location/queries/LocationsByTerm';
import CustomerBookings from './apps/booking/queries/CustomerBookings';
import BookingDetail from './apps/booking/queries/BookingDetail';
import BookingOneWay from './apps/booking/types/outputs/BookingOneWay';
import BookingMulticity from './apps/booking/types/outputs/BookingMulticity';
import BookingReturn from './apps/booking/types/outputs/BookingReturn';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      bookingDetail: BookingDetail,
      customerBookings: CustomerBookings,
      locationsByTerm: LocationsByTerm,
      searchItineraries: SearchItineraries,
    },
  }),
  types: [BookingOneWay, BookingReturn, BookingMulticity],
});

export default schema;
