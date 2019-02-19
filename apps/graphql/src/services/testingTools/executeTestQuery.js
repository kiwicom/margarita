// @flow

import { graphql as originalGraphQL } from 'graphql';

import schema from '../../Schema';
import createContext from '../graphqlContext/GraphQLContext';

/**
 * Executes GraphQL query using our schema. This function should
 * be used only during testing because it uses faked context.
 */
export default function executeTestQuery(
  query: string,
  variables: ?Object,
): Promise<Object> {
  return originalGraphQL(schema, query, null, createContext(), variables);
}
