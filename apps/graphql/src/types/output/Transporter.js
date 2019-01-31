// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
  name: 'Transporter',
  fields: {
    name: { type: GraphQLString },
  },
});
