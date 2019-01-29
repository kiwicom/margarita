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

export type GraphqlContextType = {|
  +dataLoader: {|
    +itineraries: DataLoader<ItinerariesSearchParameters, ItinerariesType[]>,
    +locations: DataLoader<{ term: string }, Locations>,
  |},
|};

export default () => ({
  dataLoader: {
    itineraries: createItinerariesLoader(),
    locations: createLocationLoader(),
  },
});
