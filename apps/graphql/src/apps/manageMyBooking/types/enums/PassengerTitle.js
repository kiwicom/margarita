// @flow

import { GraphQLEnumType } from 'graphql';

export default new GraphQLEnumType({
  name: 'PassengerTitle',
  values: {
    Mr: {
      value: 'Mr',
    },
    Ms: {
      value: 'Ms',
    },
  },
});
