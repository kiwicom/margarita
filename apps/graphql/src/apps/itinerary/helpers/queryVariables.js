// @flow

import { type ConnectionArguments } from 'graphql-relay';
import { connectionDefinitions } from '@kiwicom/graphql-utils';

import { GraphQLItinerary } from '../types/outputs/Itinerary';

export type Args<T> = {|
  +input: T,
  ...$Exact<ConnectionArguments>,
|};

export const { connectionType: ItinerariesConnection } = connectionDefinitions({
  nodeType: GraphQLItinerary,
});
