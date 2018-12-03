// @flow

import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import GlobalID from '@kiwicom/graphql-global-id';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      id: GlobalID(() => 'TODO: implement me'),

      hello: {
        type: GraphQLString,
        resolve() {
          return 'Welcome to Tequila client demo!';
        },
      },
    },
  }),
});

const inMemoryFetcher = (source: string, variableValues: {||}) => {
  return graphql(schema, source, undefined, undefined, variableValues);
};

export { schema, inMemoryFetcher };
