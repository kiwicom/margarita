// @flow

import { GraphQLString, GraphQLNonNull } from 'graphql';
import { type ConnectionArguments } from 'graphql-relay';
import {
  connectionFromArray,
  connectionArgs,
  connectionDefinitions,
} from '@kiwicom/graphql-utils';

import type { GraphqlContextType } from '../services/GraphQLContext';
import type { Location } from '../dataloaders/Locationsloader';
import GraphQLocation from '../types/output/Location';

const { connectionType: LocationsConnection } = connectionDefinitions({
  nodeType: GraphQLocation,
});

type Args = {|
  +term: string,
  ...$Exact<ConnectionArguments>,
|};

export default {
  name: 'Locations',
  type: LocationsConnection,
  description: 'Query for suggested locsation based on incomplete names',
  args: {
    term: {
      type: GraphQLNonNull(GraphQLString),
    },
    ...connectionArgs,
  },
  resolve: async (_: mixed, args: Args, { dataLoader }: GraphqlContextType) => {
    const { term } = args;
    const locations = await dataLoader.locations.load({
      term,
    });

    return connectionFromArray<Location>([...locations], args);
  },
};
