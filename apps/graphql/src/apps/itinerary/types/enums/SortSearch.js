// @flow

import { GraphQLEnumType } from 'graphql';

export default new GraphQLEnumType({
  name: 'SortSearchInput',
  values: {
    PRICE: {
      value: 'price',
    },
    DURATION: {
      value: 'duration',
    },
    QUALITY: {
      value: 'quality',
    },
    DATE: {
      value: 'date',
    },
    POPULARITY: {
      value: 'popularity',
    },
  },
});
