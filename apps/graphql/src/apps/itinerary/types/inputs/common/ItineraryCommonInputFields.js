// @flow

/* eslint-disable kiwicom-incubator/only-nullable-fields */
// Ok, these are just being used inside other GraphQLInputObjectType
// TODO: Improve
import { GraphQLNonNull } from 'graphql';

import LocationItineraryInput from './ItineraryLocationInput';
import DateRange from '../../../../common/types/inputs/DateRange';

export default {
  origin: {
    description: 'Origin location of the travel',
    type: GraphQLNonNull(LocationItineraryInput),
  },
  destination: {
    description: 'Destination location of the travel',
    type: LocationItineraryInput,
  },
  outboundDate: {
    description: 'Date Range of departure',
    type: GraphQLNonNull(DateRange),
  },
};
