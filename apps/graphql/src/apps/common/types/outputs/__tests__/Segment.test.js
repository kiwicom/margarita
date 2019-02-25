// @flow

import { evaluateGraphQLResolver } from '@kiwicom/test-utils';

import Segment from '../Segment';

const fields = Segment.getFields();

describe('stopCoordinates', () => {
  it('returns gps coordinates for the segment stops', async () => {
    const departure = {
      code: 'LIM',
    };
    const arrival = {
      code: 'OSL',
    };
    const dataLoader = {
      locations: {
        loadMany: jest.fn(() => [
          [
            {
              coordinates: {
                lat: 5,
                lng: 10,
              },
            },
          ],
          [
            {
              coordinates: {
                lat: 25,
                lng: 30,
              },
            },
          ],
        ]),
      },
    };

    const result = await evaluateGraphQLResolver(
      fields.stopCoordinates,
      { arrival, departure },
      null,
      { dataLoader },
    );

    expect(result).toEqual([
      {
        lat: 5,
        lng: 10,
      },
      {
        lat: 25,
        lng: 30,
      },
    ]);
    expect(dataLoader.locations.loadMany).toHaveBeenCalledWith([
      { code: 'LIM' },
      { code: 'OSL' },
    ]);
  });
});
