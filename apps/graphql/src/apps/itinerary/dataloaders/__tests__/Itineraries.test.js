// @flow

import { parseParameters } from '../Itineraries';
import { parseParameters as parseItineraryParameters } from '../Itinerary';

const searchParams = {
  travelFrom: ['OSL'],
  travelTo: ['PRG'],
  dateFrom: new Date('2018-01-01'),
};

it('parses parameters corectly', () => {
  expect(parseParameters(searchParams)).toMatchInlineSnapshot(`
Object {
  "curr": "EUR",
  "dateFrom": "01/01/2018",
  "dateTo": "01/01/2018",
  "flyFrom": "OSL",
  "to": "PRG",
}
`);
  expect(
    parseParameters({
      ...searchParams,
      returnDateFrom: new Date('2018-01-02'),
      returnDateTo: new Date('2018-01-02'),
      passengers: {
        adults: 2,
      },
    }),
  ).toMatchInlineSnapshot(`
Object {
  "adults": 2,
  "children": 0,
  "curr": "EUR",
  "dateFrom": "01/01/2018",
  "dateTo": "01/01/2018",
  "flyFrom": "OSL",
  "infants": 0,
  "returnFrom": "02/01/2018",
  "returnTo": "02/01/2018",
  "to": "PRG",
}
`);
});

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
