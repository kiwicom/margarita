import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} from 'graphql';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      id: {
        type: GraphQLNonNull(GraphQLID),
      },

      hello: {
        type: GraphQLString,
        resolve() {
          return 'Welcome to Tequila client demo!';
        },
      },
    },
  }),
});

const inMemoryFetcher = (source, variableValues) => {
  return graphql(schema, source, undefined, undefined, variableValues);
};

export {
  schema,
  inMemoryFetcher,
};
