// @flow

import { graphql as originalGraphQL } from 'graphql';

import schema from '../../Schema';
import createContext from '../graphqlContext/GraphQLContext';

export const graphql = (query: string, variables: ?Object): Promise<Object> => {
  return originalGraphQL(schema, query, null, createContext(), variables);
};
