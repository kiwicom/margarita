// @flow

import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';
import * as DateFNS from 'date-fns';

import Price from './Price';
import Sector from './Sector';
import Location from './Location';
import DateType from './DateType';

export type Itinerary = {|
  +id: string,
|};

export default new GraphQLObjectType({
  name: 'Itinerary',
  fields: {
    destination: { type: Location },
    endTime: { type: DateType },
    id: GlobalID(({ id }) => id),
    origin: { type: Location },
    price: { type: Price },
    sectors: {
      type: new GraphQLList(Sector),
      resolve: ({ sectors }: Sector): Sector[] =>
        sectors.map((sector, index) => ({
          ...sector,
          stopoverDuration: getStopoverDuration(sector, sectors[index - 1]),
        })),
    },
    startTime: { type: DateType },
    type: { type: GraphQLString },
  },
});

const getStopoverDuration = (
  sector: Sector,
  previousSector: ?Sector,
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
