// @flow

import { GraphQLNonNull } from 'graphql';
import { type ConnectionArguments } from 'graphql-relay';
import {
  connectionFromArray,
  connectionArgs,
  connectionDefinitions,
} from '@kiwicom/graphql-utils';

import type { GraphqlContextType } from '../../../services/graphqlContext/GraphQLContext';
import type { LocationTypeInput } from '../dataloaders/Locations';
import type { Location } from '../Location';
import GraphQLocation from '../types/outputs/Location';
import LocationsByTermInput from '../types/inputs/LocationsByTermInput';

const { connectionType: LocationsConnection } = connectionDefinitions({
  nodeType: GraphQLocation,
});

type Args = {|
  +input: { term: string, types?: LocationTypeInput[] },
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
    const { term, types } = args.input;

    const locations = await dataLoader.locations.load({
      term,
      types,
    });

    return connectionFromArray<Location>([...locations], args);
  },
};

export default Locations;
