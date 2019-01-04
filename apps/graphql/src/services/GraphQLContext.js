// @flow

import DataLoader from 'dataloader';

import createItinerariesLoader, {
  type ItinerariesSearchParameters,
  type Itineraries,
} from '../dataloaders/Itinerariesloader';
import createLocationLoader, {
  type Locations,
} from '../dataloaders/Locationsloader';

export type GraphqlContextType = {|
  +dataLoader: {|
    +itineraries: DataLoader<ItinerariesSearchParameters, Itineraries[]>,
    +locations: DataLoader<{ term: string }, Locations>,
  |},
|};

export default (apikey: string) => ({
  dataLoader: {
    itineraries: createItinerariesLoader(apikey),
    locations: createLocationLoader(apikey),
  },
});
