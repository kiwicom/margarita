// @flow

import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';

import fetch from './src/services/Fetch';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      id: GlobalID(() => 'TODO: implement me'),

      hello: {
        type: GraphQLString,

        async resolve() {
          const test = await fetch(
            'https://kiwicom-prod.apigee.net/locations/query?term=oslo',
          );

          return `Welcome to Tequila client demo! Test location query = ${
            test.locations[0].id
          }`;
        },
      },
    },
  }),
});

const inMemoryFetcher = (source: string, variableValues: {||}) => {
  return graphql(schema, source, undefined, undefined, variableValues);
};

export { schema, inMemoryFetcher };
