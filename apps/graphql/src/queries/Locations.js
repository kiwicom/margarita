// @flow

import { GraphQLNonNull } from 'graphql';
import { type ConnectionArguments } from 'graphql-relay';
import {
  connectionFromArray,
  connectionArgs,
  connectionDefinitions,
} from '@kiwicom/graphql-utils';

import type { GraphqlContextType } from '../services/GraphQLContext';
import type { Location } from '../dataloaders/LocationsloaderTypes';
import GraphQLocation from '../types/output/Location';
import LocationsByTermInput from '../types/input/LocationsByTermInput';

const { connectionType: LocationsConnection } = connectionDefinitions({
  nodeType: GraphQLocation,
});

type Args = {|
  +input: { term: string },
  ...$Exact<ConnectionArguments>,
|};

const Locations = {
  name: 'Locations',
  type: LocationsConnection,
  description: 'Query for suggested locations based on incomplete names',
  args: {
    input: {
      type: GraphQLNonNull(LocationsByTermInput),
    },
    ...connectionArgs,
  },
  resolve: async (_: mixed, args: Args, { dataLoader }: GraphqlContextType) => {
    const { term } = args.input;
    const locations = await dataLoader.locations.load({
      term,
    });

    return connectionFromArray<Location>([...locations], args);
  },
};

export default Locations;
