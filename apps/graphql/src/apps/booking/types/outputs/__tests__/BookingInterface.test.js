// @flow

import { evaluateGraphQLResolver } from '@kiwicom/test-utils';

import BookingInterface from '../BookingInterface';

const fields = BookingInterface.getFields();

const getRouteStop = (code: string) => ({
  departure: { code: `departure-${code}` },
  arrival: { code: `arrival-${code}` },
});

const getCoordinates = (input: number) => ({
  coordinates: {
    lat: input,
    lng: -input,
  },
});

describe('segmentLocations', () => {
  it('maps segment locations correctly', async () => {
    const loadMany = jest.fn(() => [
      [getCoordinates(5), getCoordinates(6)],
      [getCoordinates(10)],
    ]);

    const segmentLocations = await evaluateGraphQLResolver(
      fields.segmentLocations,
      {
        segments: [
          getRouteStop('lol'),
          getRouteStop('osl'),
          getRouteStop('lol'),
        ],
      },
      null,
      {
        dataLoader: {
          locations: { loadMany },
        },
      },
    );

    expect(segmentLocations).toEqual([
      { lat: 5, lng: -5 },
      { lat: 6, lng: -6 },
      { lat: 10, lng: -10 },
    ]);

    expect(loadMany).toHaveBeenCalledWith([
      { code: 'departure-lol' },
      { code: 'arrival-lol' },
      { code: 'departure-osl' },
      { code: 'arrival-osl' },
    ]);
  });
});

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
