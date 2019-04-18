// @flow

import { GraphQLNonNull } from 'graphql';
import { type ConnectionArguments } from 'graphql-relay';
import { connectionFromArray, connectionArgs } from '@kiwicom/graphql-utils';

import type { GraphqlContextType } from '../../../services/graphqlContext/GraphQLContext';
import type { LocationTypeInput } from '../../common/types/inputs/LocationTypeInput';
import type { Location } from '../Location';
import GraphQLocationsResult from '../types/outputs/LocationsResult';
import LocationsByTermInput from '../types/inputs/LocationsByTermInput';
import catchDataloaderError from '../../../services/helpers/catchDataloaderError';

type Args = {|
  +input: { term: string, types?: LocationTypeInput[] },
  ...$Exact<ConnectionArguments>,
|};

export default {
  name: 'LocationsByTermInput_RootQuery',
  type: GraphQLocationsResult,
  description: 'Query for suggested locations based on incomplete names',
  args: {
    input: {
      type: GraphQLNonNull(LocationsByTermInput),
    },
    ...connectionArgs,
  },
  resolve: (_: mixed, args: Args, { dataLoader }: GraphqlContextType) => {
    return catchDataloaderError(async () => {
      const { term, types } = args.input;
      const locations = await dataLoader.locations.byTerm.load({
        term,
        types,
      });
      return connectionFromArray<Location>([...locations], args);
    });
  },
};
