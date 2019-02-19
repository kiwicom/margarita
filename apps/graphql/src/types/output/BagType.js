// @flow

import { GraphQLEnumType } from 'graphql';

export default new GraphQLEnumType({
  name: 'BagType',
  description: 'Bag types',
  values: {
    CABIN_BAG: { value: 'Cabin bag' },
    PERSONAL_ITEM: { value: 'Personal item' },
    CHECKED_BAGGAGE: { value: 'Checked baggage' },
  },
});
