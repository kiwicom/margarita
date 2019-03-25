// @flow

import PassengersInput from './PassengersInput';
import OrderSearchInput from '../../enums/OrderSearch';
import SortSearchInput from '../../enums/SortSearch';

export default {
  order: {
    description: 'Order of the search',
    type: OrderSearchInput,
  },
  sort: {
    description: 'Sorting of the search',
    type: SortSearchInput,
  },
  passengers: {
    description: 'How many passengers are travelling',
    type: PassengersInput,
  },
};
