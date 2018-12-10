// @flow

import { GraphQLObjectType } from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';

export type Itinerary = {|
  +id: string,
|};

export default new GraphQLObjectType({
  name: 'Itinerary',
  fields: {
    id: GlobalID(({ id }) => id),
    // TODO: Add fields as needed
  },
});
