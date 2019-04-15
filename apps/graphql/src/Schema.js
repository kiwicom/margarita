// @flow

import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import SearchOneWayItineraries from './apps/itinerary/queries/SearchOneWayItineraries';
import SearchReturnItineraries from './apps/itinerary/queries/SearchReturnItineraries';
import LocationsByTerm from './apps/location/queries/LocationsByTerm';
import CustomerBookings from './apps/manageMyBooking/queries/CustomerBookings';
import BookingDetail from './apps/manageMyBooking/queries/BookingDetail';
import SaveBooking from './apps/booking/mutations/SaveBooking';
import ConfirmPayment from './apps/booking/mutations/ConfirmPayment';
import CheckItinerary from './apps/itinerary/queries/CheckItinerary';
import BookingOneWay from './apps/manageMyBooking/types/outputs/BookingOneWay';
import BookingMulticity from './apps/manageMyBooking/types/outputs/BookingMulticity';
import BookingReturn from './apps/manageMyBooking/types/outputs/BookingReturn';
import GeoIP from './apps/geoIp/queries/GeoIP';
import ItineraryReturn from './apps/itinerary/types/outputs/ItineraryReturn';
import ItineraryOneWay from './apps/itinerary/types/outputs/ItineraryOneWay';
import SaveBookingOutput from './apps/booking/types/outputs/SaveBooking';
import ConfirmPaymentOutput from './apps/booking/types/outputs/ConfirmPayment';

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
  mutation: new GraphQLObjectType({
    name: 'RootMutation',
    fields: {
      saveBooking: SaveBooking,
      confirmPayment: ConfirmPayment,
    },
  }),
  types: [
    BookingOneWay,
    BookingReturn,
    BookingMulticity,
    ItineraryReturn,
    ItineraryOneWay,
    SaveBookingOutput,
    ConfirmPaymentOutput,
  ],
});

export default schema;
