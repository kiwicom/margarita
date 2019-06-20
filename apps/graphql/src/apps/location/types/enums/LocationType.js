// @flow

import { GraphQLEnumType } from 'graphql';

export default new GraphQLEnumType({
  name: 'LocationType',
  values: {
    STATION: {
      value: 'station',
    },
    AIRPORT: {
      value: 'airport',
    },
    BUS_STATION: {
      value: 'bus_station',
    },
    CITY: {
      value: 'city',
    },
    SUBDIVISION: {
      value: 'subdivision',
    },
    COUNTRY: {
      value: 'country',
    },
    REGION: {
      value: 'region',
    },
    CONTINENT: {
      value: 'continent',
    },
    AUTONOMOUS_TERRITORY: {
      value: 'autonomous_territory',
    },
    SPECIAL: {
      value: 'special',
    },
    TOURIST_REGION: {
      value: 'tourist_region',
    },
  },
});
