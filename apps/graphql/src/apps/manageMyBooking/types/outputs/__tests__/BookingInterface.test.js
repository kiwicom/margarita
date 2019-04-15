// @flow

import { evaluateGraphQLResolver } from '@kiwicom/test-utils';

import BookingInterface from '../BookingInterface';

const fields = BookingInterface.getFields();

const passenger = (quantity: number) => {
  return {
    bags: [
      { quantity, type: 'Personal item', dimensions: '35x20x20' },
      { quantity, type: 'Cabin bag', dimensions: '55x40x20, 10kg' },
      { quantity, type: 'Checked baggage', dimensions: '70x50x38, 15kg' },
    ],
  };
};

describe('bagInfo', () => {
  it('returns total quantity of bags by type correctly', async () => {
    const loadPassengers = [passenger(2), passenger(2), passenger(1)];
    const bagInfo = await evaluateGraphQLResolver(fields.bagInfo, {
      passengers: loadPassengers,
    });

    expect(bagInfo).toEqual([
      {
        type: 'Personal item',
        dimensions: '35x20x20',
        quantity: 5,
      },
      {
        type: 'Cabin bag',
        dimensions: '55x40x20, 10kg',
        quantity: 5,
      },
      {
        type: 'Checked baggage',
        dimensions: '70x50x38, 15kg',
        quantity: 5,
      },
    ]);
  });
});
