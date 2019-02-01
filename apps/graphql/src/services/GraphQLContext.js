// @flow

import DataLoader from 'dataloader';

import createItinerariesLoader from '../dataloaders/Itinerariesloader';
import {
  type ItinerariesSearchParameters,
  type ItinerariesType,
} from '../dataloaders/ItinerariesloaderTypes';
import createLocationLoader, {
  type Locations,
} from '../dataloaders/Locationsloader';
import bookingsLoader, { type Booking } from '../dataloaders/BookingsLoader';

export type GraphqlContextType = {|
  +dataLoader: {|
    +itineraries: DataLoader<ItinerariesSearchParameters, ItinerariesType[]>,
    +locations: DataLoader<{ term: string }, Locations>,
    +bookings: {| +load: () => Booking[] |},
  |},
|};

export default () => ({
  dataLoader: {
    itineraries: createItinerariesLoader(),
    locations: createLocationLoader(),
    bookings: bookingsLoader,
  },
});
