// @flow

import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';

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
    sectors: { type: new GraphQLList(Sector) },
    startTime: { type: DateType },
    type: { type: GraphQLString },
  },
});
