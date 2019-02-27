// @flow

import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';
import * as DateFNS from 'date-fns';

import type { ItinerariesType, Sector } from '../../Itinerary';
import GraphQLPrice from '../../../common/types/outputs/Price';
import GraphQLSector from '../../../common/types/outputs/Sector';
import GraphQLLocation from '../../../location/types/outputs/Location';
import GraphQLDateType from '../../../common/types/outputs/DateType';

export type Itinerary = {|
  +id: string,
|};

export default new GraphQLObjectType({
  name: 'Itinerary',
  fields: {
    destination: { type: GraphQLLocation },
    endTime: { type: GraphQLDateType },
    id: GlobalID(({ id }) => id),
    origin: { type: GraphQLLocation },
    price: { type: GraphQLPrice },
    sectors: {
      type: new GraphQLList(GraphQLSector),
      resolve: ({ sectors }: ItinerariesType): Sector[] => {
        if (sectors == null) {
          return [];
        }
        return sectors.map((sector, index) => ({
          ...sector,
          stopoverDuration: getStopoverDuration(sector, sectors[index - 1]),
        }));
      },
    },
    startTime: { type: GraphQLDateType },
    type: { type: GraphQLString },
    bookingToken: { type: GraphQLString },
  },
});

const getStopoverDuration = (
  sector: GraphQLSector,
  previousSector: ?GraphQLSector,
): number | null => {
  if (previousSector == null) {
    return null;
  }

  const currentSectorDeparture = sector.departureTime?.utc;
  const previousSectorArrival = previousSector.arrivalTime?.utc;

  if (currentSectorDeparture == null || previousSectorArrival == null) {
    return null;
  }

  return DateFNS.differenceInMinutes(
    new Date(currentSectorDeparture),
    new Date(previousSectorArrival),
  );
};
