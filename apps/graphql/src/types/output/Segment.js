// @flow

import { GraphQLObjectType, GraphQLInt } from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';

import DateType from './DateType';
import Vehicle from './Vehicle';
import Transporter from './Transporter';
import Location from './Location';

export default new GraphQLObjectType({
  name: 'Segment',
  fields: {
    arrivalTime: { type: DateType },
    departureTime: { type: DateType },
    destination: { type: Location },
    duration: { type: GraphQLInt },
    id: GlobalID(({ id }) => id),
    origin: { type: Location },
    transporter: { type: Transporter },
    vehicle: { type: Vehicle },
  },
});
