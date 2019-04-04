// @flow

import { connectionDefinitions } from '@kiwicom/graphql-utils';

import ItineraryInterface from './ItineraryInterface';

export const { connectionType: ItinerariesConnection } = connectionDefinitions({
  nodeType: ItineraryInterface,
});
