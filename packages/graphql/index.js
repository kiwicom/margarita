// @flow

import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';

import fetch from './src/services/Fetch';
import Itineraries from './src/queries/Itineraries';
import createContext from './src/services/GraphQLContext';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      searchItineraries: Itineraries,
      id: GlobalID(() => 'TODO: implement me'),

      hello: {
        type: GraphQLString,

        async resolve() {
          const test = await fetch('/locations/query?term=oslo');

          return `Welcome to Tequila client demo! Test location query = ${
            test.locations[0].id
          }`;
        },
      },
    },
  }),
});

const inMemoryFetcher = (source: string, variableValues: {||}) => {
  const context = createContext();
  return graphql(schema, source, undefined, context, variableValues);
};

export { schema, inMemoryFetcher };
