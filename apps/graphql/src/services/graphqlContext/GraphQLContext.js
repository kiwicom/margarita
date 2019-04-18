// @flow

import DataLoader from 'dataloader';

import { createItinerariesLoader } from '../../apps/itinerary/dataloaders/Itineraries';
import createItineraryLoader from '../../apps/itinerary/dataloaders/Itinerary';
import createSaveBookingLoader from '../../apps/booking/dataloaders/SaveBooking';
import createConfirmPaymentLoader from '../../apps/booking/dataloaders/ConfirmPayment';
import {
  type ItinerariesOneWaySearchParameters,
  type ItinerariesReturnSearchParameters,
  type Itinerary,
  type ItineraryCheckParameters,
} from '../../apps/itinerary/Itinerary';
import createLocationByIDLoader, {
  type LocationInputID,
} from '../../apps/location/dataloaders/LocationsByID';
import createLocationByTermLoader, {
  type LocationInputTerm,
} from '../../apps/location/dataloaders/LocationsByTerm';
import type { Locations } from '../../apps/location/Location';
import bookingsLoader from '../../apps/manageMyBooking/dataloaders/Bookings';
import type { Booking } from '../../apps/manageMyBooking/manageMyBooking';
import type {
  SaveBookingOutputType,
  SaveBookingPayloadType,
  ConfirmPaymentOutputType,
  ConfirmPaymentPayloadType,
} from '../../apps/booking/Booking';
import bookingDetailLoader from '../../apps/manageMyBooking/dataloaders/BookingDetail';
import parseAcceptLanguage from '../helpers/parseAcceptLanguage';

type LocaleType = {|
  +language?: string,
  +territory?: string,
|};

type CreateContextType = {|
  +acceptLanguageHeaders: ?string,
|};

export type GraphqlContextType = {|
  +dataLoader: {|
    +itineraries: DataLoader<
      ItinerariesOneWaySearchParameters | ItinerariesReturnSearchParameters,
      Itinerary[],
    >,
    +itinerary: DataLoader<ItineraryCheckParameters, Itinerary>,
    +saveBooking: DataLoader<SaveBookingPayloadType, SaveBookingOutputType>,
    +confirmPayment: DataLoader<
      ConfirmPaymentPayloadType,
      ConfirmPaymentOutputType,
    >,
    +locations: {
      byID: DataLoader<LocationInputID, Locations>,
      byTerm: DataLoader<LocationInputTerm, Locations>,
    },
    +bookings: {| +load: () => Booking[] |},
    +booking: {| +load: (id: string) => Booking |},
  |},
  +locale: LocaleType,
|};

export default function createContext(props: ?CreateContextType) {
  const [language, territory] = parseAcceptLanguage(
    props?.acceptLanguageHeaders,
  );
  const locale: LocaleType = {
    language,
    territory,
  };

  return {
    dataLoader: {
      itineraries: createItinerariesLoader(),
      itinerary: createItineraryLoader(),
      locations: {
        byID: createLocationByIDLoader(),
        byTerm: createLocationByTermLoader(),
      },
      saveBooking: createSaveBookingLoader(),
      bookings: bookingsLoader,
      booking: bookingDetailLoader,
      confirmPayment: createConfirmPaymentLoader(),
    },
    locale,
  };
}
