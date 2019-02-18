// @flow

import DataLoader from 'dataloader';

import createItinerariesLoader from '../dataloaders/Itinerariesloader';
import {
  type ItinerariesSearchParameters,
  type ItinerariesType,
} from '../dataloaders/ItinerariesloaderTypes';
import createLocationLoader, {
  type Locations,
  type LocationInput,
} from '../dataloaders/Locationsloader';
import bookingsLoader from '../dataloaders/bookingsLoader/BookingsLoader';
import type { Booking } from '../dataloaders/bookingsLoader/BookingFlowTypes';
import bookingDetailLoader from '../dataloaders/bookingsLoader/BookingDetailLoader';

export type GraphqlContextType = {|
  +dataLoader: {|
    +itineraries: DataLoader<ItinerariesSearchParameters, ItinerariesType[]>,
    +locations: DataLoader<LocationInput, Locations>,
    +bookings: {| +load: () => Booking[] |},
    +booking: {| +load: (id: string) => Booking |},
  |},
|};

export default function createContext() {
  return {
    dataLoader: {
      itineraries: createItinerariesLoader(),
      locations: createLocationLoader(),
      bookings: bookingsLoader,
      booking: bookingDetailLoader,
    },
  };
}
