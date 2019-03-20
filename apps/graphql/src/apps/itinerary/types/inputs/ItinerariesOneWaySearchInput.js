// @flow

import { GraphQLInputObjectType } from 'graphql';

import ItinerariesSharedSearchInput from './ItinerariesSharedSearchInput';

export default new GraphQLInputObjectType({
  name: 'ItinerariesOneWaySearchInput',
  fields: ItinerariesSharedSearchInput.fields,
});
