// @flow

import DataLoader from 'dataloader';

import createItinerariesLoader, {
  type ItinerariesSearchParameters,
  type Itineraries,
} from '../dataloaders/Itinerariesloader';

export type GraphqlContextType = {|
  +dataLoader: {|
    +itineraries: DataLoader<ItinerariesSearchParameters, Itineraries[]>,
  |},
|};

export default () => ({
  dataLoader: {
    itineraries: createItinerariesLoader(),
  },
});
