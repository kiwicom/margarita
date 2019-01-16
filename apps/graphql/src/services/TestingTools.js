// @flow

import { graphql as originalGraphQL } from 'graphql';

import schema from '../Schema';
import createContext from './GraphQLContext';

jest.mock('./Fetch.js');
export const graphql = async (
  query: string,
  variables: ?Object,
): Promise<Object> => {
  return originalGraphQL(schema, query, null, createContext(), variables);
};
