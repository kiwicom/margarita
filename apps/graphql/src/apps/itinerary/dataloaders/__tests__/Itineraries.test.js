// @flow

import { parseParameters as parseItineraryParameters } from '../Itinerary';
import { parseParameters } from '../Itineraries';

const searchParamsOneWay = {
  order: 'DESC',
  sort: 'quality',
  limit: 10,
  passengers: {
    adults: 1,
    children: 0,
    infants: 0,
  },
  itinerary: {
    origin: {
      ids: ['TG9jYXRpb246cHJhZ3VlX2N6'],
    },
    destination: {
      ids: ['TG9jYXRpb246bG9uZG9uX2di'],
    },
    outboundDate: {
      start: new Date('2019-05-01'),
      end: new Date('2019-05-03'),
    },
  },
};

const searchParamsReturn = {
  ...searchParamsOneWay,
  itinerary: {
    ...searchParamsOneWay.itinerary,
    inboundDate: {
      start: new Date('2019-05-25'),
      end: new Date('2019-05-28'),
    },
  },
};

it('parses validity parameters corectly', () => {
  const token = 'token';
  expect(
    parseItineraryParameters({
      bookingToken: token,
      bags: 1,
      passengers: {
        adults: 2,
        children: 1,
        infants: 1,
      },
    }),
  ).toMatchObject({
    booking_token: token,
    bnum: 1,
    pnum: 4,
  });
  expect(
    parseItineraryParameters({
      bookingToken: token,
      bags: 1,
      passengers: {
        adults: 1,
      },
    }),
  ).toMatchObject({
    booking_token: token,
    bnum: 1,
    pnum: 1,
  });
});

it('parses search parameters correctly', () => {
  expect(parseParameters((searchParamsOneWay: any))).toMatchInlineSnapshot(`
    Object {
      "adults": 1,
      "asc": 0,
      "children": 0,
      "curr": "EUR",
      "date_from": "01/05/2019",
      "date_to": "03/05/2019",
      "fly_from": "prague_cz",
      "fly_to": "london_gb",
      "infants": 0,
      "limit": 10,
      "sort": "quality",
    }
  `);
  expect(parseParameters((searchParamsReturn: any))).toMatchInlineSnapshot(`
    Object {
      "adults": 1,
      "asc": 0,
      "children": 0,
      "curr": "EUR",
      "date_from": "01/05/2019",
      "date_to": "03/05/2019",
      "fly_from": "prague_cz",
      "fly_to": "london_gb",
      "infants": 0,
      "limit": 10,
      "return_from": "25/05/2019",
      "return_to": "28/05/2019",
      "sort": "quality",
    }
  `);
});
