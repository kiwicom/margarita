// @flow

import {
  GraphQLInterfaceType,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
} from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';
import differenceInMinutes from 'date-fns/differenceInMinutes';

import type { Sector } from '../../../common/CommonTypes';
import type { Itinerary } from '../../Itinerary';
import GraphQLPrice from '../../../common/types/outputs/Price';
import GraphQLSector from '../../../common/types/outputs/Sector';
import GraphQLRouteStop from '../../../common/types/outputs/RouteStop';

const getStopoverDuration = (
  sector: GraphQLSector,
  previousSector: ?GraphQLSector,
): number | null => {
  if (previousSector == null) {
    return null;
  }

  const currentSectorDeparture = sector.departure?.time?.utc;
  const previousSectorArrival = previousSector.arrival?.time?.utc;

  if (currentSectorDeparture == null || previousSectorArrival == null) {
    return null;
  }

  return differenceInMinutes(
    new Date(currentSectorDeparture),
    new Date(previousSectorArrival),
  );
};

export const commonFields = {
  id: GlobalID(({ id }) => id),
  price: { type: GraphQLPrice },
  sectors: {
    type: new GraphQLList(GraphQLSector),
    resolve: ({ sectors }: Itinerary): Sector[] => {
      if (sectors == null) {
        return [];
      }
      return sectors.map((sector, index) => ({
        ...sector,
        stopoverDuration: getStopoverDuration(sector, sectors[index - 1]),
      }));
    },
  },
  arrival: {
    type: GraphQLRouteStop,
  },
  departure: {
    type: GraphQLRouteStop,
  },
  type: { type: GraphQLString },
  bookingToken: { type: GraphQLString },
  isChecked: {
    type: GraphQLBoolean,
    description: 'All segments successfully checked',
  },
  isValid: {
    type: GraphQLBoolean,
    description: 'Itinerary is valid (exists and is not sold-out or cancelled)',
  },
};

export default new GraphQLInterfaceType({
  name: 'ItineraryInterface',
  fields: commonFields,
});
