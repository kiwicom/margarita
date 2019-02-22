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
