// @flow

import { GraphQLNonNull } from 'graphql';

import LocationItineraryInput from './ItineraryLocationInput';
import DateRange from '../../../../common/types/inputs/DateRange';

export default {
  origin: {
    description: 'Origin of the flight',
    type: GraphQLNonNull(LocationItineraryInput),
  },
  destination: {
    description: 'Destination of the flight',
    type: LocationItineraryInput,
  },
  outboundDate: {
    description: 'Date Range of departure',
    type: GraphQLNonNull(DateRange),
  },
};
