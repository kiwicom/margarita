// @flow

import qs from 'qs';

jest.mock('uuid/v4', () => {
  let value = 0;
  return () => value++;
});

import {
  parseURLqueryToState,
  locationParser,
  createPassengersStateMiddleware,
} from '../helpers';

describe('locationParser', () => {
  const locations = {
    prague: {
      id: 'TG9jYXRpb246cHJhZ3VlX2N6',
      locationId: 'prague_cz',
      name: 'Prague',
      type: 'destination',
    },
    oslo: {
      id: 'TG9jYXRpb246b3Nsb19ubw==',
      locationId: 'oslo_no',
      name: 'Oslo',
      type: 'destination',
    },
  };

  test('parse query string into locations', () => {
    const result = locationParser(qs.parse([locations.prague, locations.oslo]));
    expect(result).toEqual([locations.prague, locations.oslo]);
  });

  test('parse query string into location', () => {
    const queryString = qs.parse([locations.prague]);
    const result = locationParser(queryString);

    expect(result).toStrictEqual([locations.prague]);
  });
});

const urlQuery = {
  travelFrom:
    '0%5Bid%5D=TG9jYXRpb246cHJhZ3VlX2N6&0%5BlocationId%5D=prague_cz&0%5Bname%5D=Prague&0%5Btype%5D=destination',
  travelTo:
    '0%5Bid%5D=TG9jYXRpb246b3Nsb19ubw%3D%3D&0%5BlocationId%5D=oslo_no&0%5Bname%5D=Oslo&0%5Btype%5D=destination',
  travelFromName: 'Prague',
  travelToName: 'Oslo',
  sortBy: 'QUALITY',
  limit: '50',
  adults: '2',
  infants: '1',
  dateFrom: '2019-06-01',
  dateTo: '2019-06-01',
  returnDateFrom: '2019-06-03',
  returnDateTo: '2019-06-03',
  invalid: '', // nema co robit v url
};

describe('parseURLqueryToState', () => {
  jest.spyOn(global.console, 'warn').mockImplementation(() => {});
  it('parse query to context state and filter invalid parameters', () => {
    expect(parseURLqueryToState(urlQuery)).toMatchInlineSnapshot(`
    Object {
      "adults": 2,
      "dateFrom": 2019-06-01T00:00:00.000Z,
      "dateTo": 2019-06-01T00:00:00.000Z,
      "infants": 1,
      "limit": 50,
      "returnDateFrom": 2019-06-03T00:00:00.000Z,
      "returnDateTo": 2019-06-03T00:00:00.000Z,
      "sortBy": "QUALITY",
      "travelFrom": Array [
        Object {
          "id": "TG9jYXRpb246cHJhZ3VlX2N6",
          "locationId": "prague_cz",
          "name": "Prague",
          "type": "destination",
        },
      ],
      "travelFromName": "Prague",
      "travelTo": Array [
        Object {
          "id": "TG9jYXRpb246b3Nsb19ubw==",
          "locationId": "oslo_no",
          "name": "Oslo",
          "type": "destination",
        },
      ],
      "travelToName": "Oslo",
    }
  `);

    /* eslint-disable-next-line no-console */
    expect(console.warn).toBeCalledWith(
      'Unexpected URL parameter "invalid" have been detected',
    );
  });
});

test('createPassengersStateMiddleware', () => {
  const results = createPassengersStateMiddleware({ adults: 1, infants: 2 });
  expect(results).toMatchInlineSnapshot(`
    Object {
      "adults": 1,
      "infants": 2,
      "passengers": Array [
        Object {
          "bags": null,
          "dateOfBirth": null,
          "gender": null,
          "id": 0,
          "lastName": null,
          "name": null,
          "nationality": null,
          "passportId": null,
          "type": "adult",
        },
        Object {
          "bags": null,
          "dateOfBirth": null,
          "gender": null,
          "id": 1,
          "lastName": null,
          "name": null,
          "nationality": null,
          "passportId": null,
          "type": "infant",
        },
        Object {
          "bags": null,
          "dateOfBirth": null,
          "gender": null,
          "id": 2,
          "lastName": null,
          "name": null,
          "nationality": null,
          "passportId": null,
          "type": "infant",
        },
      ],
    }
  `);
});
