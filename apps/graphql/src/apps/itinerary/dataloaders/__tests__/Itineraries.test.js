// @flow

import { parseParameters as parseItineraryParameters } from '../Itinerary';
import { parseParameters, parseParametersNew } from '../Itineraries';

const searchParams = {
  travelFrom: ['OSL'],
  travelTo: ['PRG'],
  dateFrom: new Date('2018-01-01'),
};

const searchParamsOneWayNew = {
  order: 'DESC',
  sort: 'quality',
  passengers: {
    adults: 1,
    children: 0,
    infants: 0,
  },
  itinerary: {
    origin: {
      ids: ['prague_cz'],
    },
    destination: {
      ids: ['STN'],
    },
    outboundDate: {
      start: new Date('2019-05-01'),
      end: new Date('2019-05-03'),
    },
  },
};

const searchParamsReturnNew = {
  ...searchParamsOneWayNew,
  itinerary: {
    ...searchParamsOneWayNew.itinerary,
    inboundDate: {
      start: new Date('2019-05-25'),
      end: new Date('2019-05-28'),
    },
  },
};

it('parses parameters correctly', () => {
  expect(parseParameters(searchParams)).toMatchInlineSnapshot(`
Object {
  "curr": "EUR",
  "date_from": "01/01/2018",
  "date_to": "01/01/2018",
  "fly_from": "OSL",
  "fly_to": "PRG",
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
  "date_from": "01/01/2018",
  "date_to": "01/01/2018",
  "fly_from": "OSL",
  "fly_to": "PRG",
  "infants": 0,
  "return_from": "02/01/2018",
  "return_to": "02/01/2018",
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

it('parses new parameters correctly', () => {
  expect(parseParametersNew((searchParamsOneWayNew: any)))
    .toMatchInlineSnapshot(`
Object {
  "adults": 1,
  "asc": 0,
  "children": 0,
  "curr": "EUR",
  "date_from": "01/05/2019",
  "date_to": "03/05/2019",
  "fly_from": "prague_cz",
  "fly_to": "STN",
  "infants": 0,
  "sort": "quality",
}
`);
  expect(parseParametersNew((searchParamsReturnNew: any)))
    .toMatchInlineSnapshot(`
Object {
  "adults": 1,
  "asc": 0,
  "children": 0,
  "curr": "EUR",
  "date_from": "01/05/2019",
  "date_to": "03/05/2019",
  "fly_from": "prague_cz",
  "fly_to": "STN",
  "infants": 0,
  "return_from": "25/05/2019",
  "return_to": "28/05/2019",
  "sort": "quality",
}
`);
});
