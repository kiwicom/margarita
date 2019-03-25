// @flow

import DataLoader from 'dataloader';

import {
  createItinerariesLoader,
  createItinerariesNewLoader,
} from '../../apps/itinerary/dataloaders/Itineraries';
import createItineraryLoader from '../../apps/itinerary/dataloaders/Itinerary';
import {
  type ItinerariesSearchParameters,
  type ItinerariesOneWaySearchParameters,
  type Itinerary,
  type ItineraryCheckParameters,
} from '../../apps/itinerary/Itinerary';
import createLocationLoader, {
  type Locations,
  type LocationInput,
} from '../../apps/location/dataloaders/Locations';
import bookingsLoader from '../../apps/booking/dataloaders/Bookings';
import type { Booking } from '../../apps/booking/Booking';
import bookingDetailLoader from '../../apps/booking/dataloaders/BookingDetail';

export type GraphqlContextType = {|
  +dataLoader: {|
    +itineraries: DataLoader<ItinerariesSearchParameters, Itinerary[]>,
    +itineraries_new: DataLoader<
      ItinerariesOneWaySearchParameters,
      Itinerary[],
    >,
    +itinerary: DataLoader<ItineraryCheckParameters, Itinerary>,
    +locations: DataLoader<LocationInput, Locations>,
    +bookings: {| +load: () => Booking[] |},
    +booking: {| +load: (id: string) => Booking |},
  |},
|};

export default function createContext() {
  return {
    dataLoader: {
      itineraries: createItinerariesLoader(),
      itinerary: createItineraryLoader(),
      itineraries_new: createItinerariesNewLoader(),
      locations: createLocationLoader(),
      bookings: bookingsLoader,
      booking: bookingDetailLoader,
    },
  };
}
