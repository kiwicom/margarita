// @flow

import * as DateFNS from 'date-fns';

export const oneWayRoutesList = [
  {
    airline: 'FR',
    cityFrom: 'Oslo',
    cityTo: 'London',
    flight_no: 33,
    flyFrom: 'TRF',
    flyTo: 'STN',
    id: '3973635726331617_0',
    local_arrival: DateFNS.parse('2019-03-10T12:55:00.000Z'),
    local_departure: '2019-03-10T11:55:00.000Z',
    utc_arrival: '2019-03-10T12:55:00.000Z',
    utc_departure: '2019-03-10T10:55:00.000Z',
    vehicle_type: 'aircraft',
  },
  {
    airline: 'FR',
    cityFrom: 'London',
    cityTo: 'Prague',
    flight_no: 1013,
    flyFrom: 'STN',
    flyTo: 'PRG',
    id: '4163850634461876_0',
    local_arrival: '2019-03-11T11:50:00.000Z',
    local_departure: '2019-03-11T08:55:00.000Z',
    utc_arrival: '2019-03-11T10:50:00.000Z',
    utc_departure: '2019-03-11T08:55:00.000Z',
    vehicle_type: 'aircraft',
  },
];

export const oneWayRoutesMap = [['TRF', 'PRG']];
export const oneWaySectors = [
  {
    arrivalTime: {
      local: '2019-03-11T11:50:00.000Z',
      utc: '2019-03-11T10:50:00.000Z',
    },
    departureTime: {
      local: '2019-03-10T11:55:00.000Z',
      utc: '2019-03-10T10:55:00.000Z',
    },
    destination: {
      country: {
        code: null,
        flagURL: 'flagUrl',
        id: null,
        name: null,
        slug: 'slug',
      },
      id: 'PRG',
      locationId: 'PRG',
      name: 'Prague',
      timezone: 'UTC+1',
    },
    duration: 1435,
    origin: {
      country: {
        code: null,
        flagURL: 'flagUrl',
        id: null,
        name: null,
        slug: 'slug',
      },
      id: 'TRF',
      locationId: 'TRF',
      name: 'Oslo',
      timezone: 'UTC+1',
    },
    segments: [
      {
        arrivalTime: {
          local: '2019-03-10T12:55:00.000Z',
          utc: '2019-03-10T12:55:00.000Z',
        },
        departureTime: {
          local: '2019-03-10T11:55:00.000Z',
          utc: '2019-03-10T10:55:00.000Z',
        },
        destination: {
          country: {
            code: null,
            flagURL: 'flagUrl',
            id: null,
            name: null,
            slug: 'slug',
          },
          id: 'STN',
          locationId: 'STN',
          name: 'London',
          timezone: 'UTC+1',
        },
        duration: 120,
        id: '3973635726331617_0',
        origin: {
          country: {
            code: null,
            flagURL: 'flagUrl',
            id: null,
            name: null,
            slug: 'slug',
          },
          id: 'TRF',
          locationId: 'TRF',
          name: 'Oslo',
          timezone: 'UTC+1',
        },
        transporter: { name: 'FR' },
        vehicle: { type: 'aircraft', uniqueNo: '33' },
      },
      {
        arrivalTime: {
          local: '2019-03-11T11:50:00.000Z',
          utc: '2019-03-11T10:50:00.000Z',
        },
        departureTime: {
          local: '2019-03-11T08:55:00.000Z',
          utc: '2019-03-11T08:55:00.000Z',
        },
        destination: {
          country: {
            code: null,
            flagURL: 'flagUrl',
            id: null,
            name: null,
            slug: 'slug',
          },
          id: 'PRG',
          locationId: 'PRG',
          name: 'Prague',
          timezone: 'UTC+1',
        },
        duration: 115,
        id: '4163850634461876_0',
        origin: {
          country: {
            code: null,
            flagURL: 'flagUrl',
            id: null,
            name: null,
            slug: 'slug',
          },
          id: 'STN',
          locationId: 'STN',
          name: 'London',
          timezone: 'UTC+1',
        },
        transporter: { name: 'FR' },
        vehicle: { type: 'aircraft', uniqueNo: '1013' },
      },
    ],
  },
];

export const twoWayRoutesList = [
  {
    flyFrom: 'OSL',
    flyTo: 'BCN',
  },
  {
    flyFrom: 'BCN',
    flyTo: 'PRG',
  },
  {
    flyFrom: 'PRG',
    flyTo: 'OSL',
  },
];
export const twoWayRoutesMap = [['OSL', 'PRG'], ['PRG', 'OSL']];
export const twoWaySectors = [
  {
    arrivalTime: { local: null, utc: null },
    departureTime: { local: null, utc: null },
    destination: {
      country: {
        code: null,
        flagURL: 'flagUrl',
        id: null,
        name: null,
        slug: 'slug',
      },
      id: 'PRG',
      locationId: 'PRG',
      name: null,
      timezone: 'UTC+1',
    },
    duration: NaN,
    origin: {
      country: {
        code: null,
        flagURL: 'flagUrl',
        id: null,
        name: null,
        slug: 'slug',
      },
      id: 'OSL',
      locationId: 'OSL',
      name: null,
      timezone: 'UTC+1',
    },
    segments: [
      {
        arrivalTime: { local: null, utc: null },
        departureTime: { local: null, utc: null },
        destination: {
          country: {
            code: null,
            flagURL: 'flagUrl',
            id: null,
            name: null,
            slug: 'slug',
          },
          id: 'BCN',
          locationId: 'BCN',
          name: null,
          timezone: 'UTC+1',
        },
        duration: NaN,
        id: undefined,
        origin: {
          country: {
            code: null,
            flagURL: 'flagUrl',
            id: null,
            name: null,
            slug: 'slug',
          },
          id: 'OSL',
          locationId: 'OSL',
          name: null,
          timezone: 'UTC+1',
        },
        transporter: { name: null },
        vehicle: { type: null, uniqueNo: 'undefined' },
      },
      {
        arrivalTime: { local: null, utc: null },
        departureTime: { local: null, utc: null },
        destination: {
          country: {
            code: null,
            flagURL: 'flagUrl',
            id: null,
            name: null,
            slug: 'slug',
          },
          id: 'PRG',
          locationId: 'PRG',
          name: null,
          timezone: 'UTC+1',
        },
        duration: NaN,
        id: undefined,
        origin: {
          country: {
            code: null,
            flagURL: 'flagUrl',
            id: null,
            name: null,
            slug: 'slug',
          },
          id: 'BCN',
          locationId: 'BCN',
          name: null,
          timezone: 'UTC+1',
        },
        transporter: { name: null },
        vehicle: { type: null, uniqueNo: 'undefined' },
      },
    ],
  },
  {
    arrivalTime: { local: null, utc: null },
    departureTime: { local: null, utc: null },
    destination: {
      country: {
        code: null,
        flagURL: 'flagUrl',
        id: null,
        name: null,
        slug: 'slug',
      },
      id: 'OSL',
      locationId: 'OSL',
      name: null,
      timezone: 'UTC+1',
    },
    duration: NaN,
    origin: {
      country: {
        code: null,
        flagURL: 'flagUrl',
        id: null,
        name: null,
        slug: 'slug',
      },
      id: 'PRG',
      locationId: 'PRG',
      name: null,
      timezone: 'UTC+1',
    },
    segments: [
      {
        arrivalTime: { local: null, utc: null },
        departureTime: { local: null, utc: null },
        destination: {
          country: {
            code: null,
            flagURL: 'flagUrl',
            id: null,
            name: null,
            slug: 'slug',
          },
          id: 'OSL',
          locationId: 'OSL',
          name: null,
          timezone: 'UTC+1',
        },
        duration: NaN,
        id: undefined,
        origin: {
          country: {
            code: null,
            flagURL: 'flagUrl',
            id: null,
            name: null,
            slug: 'slug',
          },
          id: 'PRG',
          locationId: 'PRG',
          name: null,
          timezone: 'UTC+1',
        },
        transporter: { name: null },
        vehicle: { type: null, uniqueNo: 'undefined' },
      },
    ],
  },
];
