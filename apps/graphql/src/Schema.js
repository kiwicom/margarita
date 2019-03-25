// @flow

import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import SearchItineraries from './apps/itinerary/queries/SearchItineraries';
import SearchOneWayItineraries from './apps/itinerary/queries/SearchOneWayItineraries';
import SearchReturnItineraries from './apps/itinerary/queries/SearchReturnItineraries';
import LocationsByTerm from './apps/location/queries/LocationsByTerm';
import CustomerBookings from './apps/booking/queries/CustomerBookings';
import BookingDetail from './apps/booking/queries/BookingDetail';
import CheckItinerary from './apps/itinerary/queries/CheckItinerary';
import BookingOneWay from './apps/booking/types/outputs/BookingOneWay';
import BookingMulticity from './apps/booking/types/outputs/BookingMulticity';
import BookingReturn from './apps/booking/types/outputs/BookingReturn';
import GeoIP from './apps/geoIp/queries/GeoIP';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      bookingDetail: BookingDetail,
      customerBookings: CustomerBookings,
      locationsByTerm: LocationsByTerm,
      searchItineraries: SearchItineraries,
      searchOneWayItineraries: SearchOneWayItineraries,
      searchReturnItineraries: SearchReturnItineraries,
      checkItinerary: CheckItinerary,
      geoIP: GeoIP,
    },
  }),
  types: [BookingOneWay, BookingReturn, BookingMulticity],
});

export default schema;
