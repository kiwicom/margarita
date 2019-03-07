// @flow strict

import { connectionDefinitions } from '@kiwicom/graphql-utils';

import GraphQLocation from './Location';

const { connectionType: LocationsConnection } = connectionDefinitions({
  nodeType: GraphQLocation,
});

export default LocationsConnection;
