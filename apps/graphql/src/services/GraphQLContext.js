// @flow

import DataLoader from 'dataloader';

import createItinerariesLoader from '../dataloaders/Itinerariesloader';
import {
  type ItinerariesSearchParametersType,
  type ItinerariesType,
} from '../dataloaders/ItinerariesloaderTypes';
import createLocationLoader, {
  type Locations,
} from '../dataloaders/Locationsloader';

export type GraphqlContextType = {|
  +dataLoader: {|
    +itineraries: DataLoader<
      ItinerariesSearchParametersType,
      ItinerariesType[],
    >,
    +locations: DataLoader<{ term: string }, Locations>,
  |},
|};

export default () => ({
  dataLoader: {
    itineraries: createItinerariesLoader(),
    locations: createLocationLoader(),
  },
});
