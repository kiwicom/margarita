// @flow

import { GraphQLSchema, GraphQLObjectType } from 'graphql';

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
import ItineraryReturn from './apps/itinerary/types/outputs/ItineraryReturn';
import ItineraryOneWay from './apps/itinerary/types/outputs/ItineraryOneWay';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      bookingDetail: BookingDetail,
      customerBookings: CustomerBookings,
      locationsByTerm: LocationsByTerm,
      searchOneWayItineraries: SearchOneWayItineraries,
      searchReturnItineraries: SearchReturnItineraries,
      checkItinerary: CheckItinerary,
      geoIP: GeoIP,
    },
  }),
  types: [
    BookingOneWay,
    BookingReturn,
    BookingMulticity,
    ItineraryReturn,
    ItineraryOneWay,
  ],
});

export default schema;
