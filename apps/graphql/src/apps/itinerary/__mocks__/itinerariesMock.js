// @flow

export const oneWayRoutesList = [
  {
    airline: 'FR',
    cityFrom: 'Oslo',
    cityTo: 'London',
    flight_no: 33,
    flyFrom: 'TRF',
    flyTo: 'STN',
    id: '3973635726331617_0',
    local_arrival: '2019-03-10T12:55:00.000Z',
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
        flagURL: null,
        id: null,
        locationId: null,
        name: null,
        slug: null,
      },
      id: 'PRG',
      locationId: 'PRG',
      name: 'Prague',
      slug: null,
      timezone: 'UTC+1',
    },
    duration: 1435,
    origin: {
      country: {
        code: null,
        flagURL: null,
        id: null,
        locationId: null,
        name: null,
        slug: null,
      },
      id: 'TRF',
      locationId: 'TRF',
      name: 'Oslo',
      slug: null,
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
            flagURL: null,
            id: null,
            locationId: null,
            name: null,
            slug: null,
          },
          id: 'STN',
          locationId: 'STN',
          name: 'London',
          slug: null,
          timezone: 'UTC+1',
        },
        duration: 120,
        id: '3973635726331617_0',
        origin: {
          country: {
            code: null,
            flagURL: null,
            id: null,
            locationId: null,
            name: null,
            slug: null,
          },
          id: 'TRF',
          locationId: 'TRF',
          name: 'Oslo',
          slug: null,
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
            flagURL: null,
            id: null,
            locationId: null,
            name: null,
            slug: null,
          },
          id: 'PRG',
          locationId: 'PRG',
          name: 'Prague',
          slug: null,
          timezone: 'UTC+1',
        },
        duration: 115,
        id: '4163850634461876_0',
        origin: {
          country: {
            code: null,
            flagURL: null,
            id: null,
            locationId: null,
            name: null,
            slug: null,
          },
          id: 'STN',
          locationId: 'STN',
          name: 'London',
          slug: null,
          timezone: 'UTC+1',
        },
        transporter: { name: 'FR' },
        vehicle: { type: 'aircraft', uniqueNo: '1013' },
      },
    ],
    stopoverDuration: null,
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
        flagURL: null,
        id: null,
        locationId: null,
        name: null,
        slug: null,
      },
      id: 'PRG',
      locationId: 'PRG',
      name: null,
      slug: null,
      timezone: 'UTC+1',
    },
    duration: null,
    origin: {
      country: {
        code: null,
        flagURL: null,
        id: null,
        locationId: null,
        name: null,
        slug: null,
      },
      id: 'OSL',
      locationId: 'OSL',
      name: null,
      slug: null,
      timezone: 'UTC+1',
    },
    segments: [
      {
        arrivalTime: { local: null, utc: null },
        departureTime: { local: null, utc: null },
        destination: {
          country: {
            code: null,
            flagURL: null,
            id: null,
            locationId: null,
            name: null,
            slug: null,
          },
          id: 'BCN',
          locationId: 'BCN',
          name: null,
          slug: null,
          timezone: 'UTC+1',
        },
        duration: null,
        id: undefined,
        origin: {
          country: {
            code: null,
            flagURL: null,
            id: null,
            locationId: null,
            name: null,
            slug: null,
          },
          id: 'OSL',
          locationId: 'OSL',
          name: null,
          slug: null,
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
            flagURL: null,
            id: null,
            locationId: null,
            name: null,
            slug: null,
          },
          id: 'PRG',
          locationId: 'PRG',
          name: null,
          slug: null,
          timezone: 'UTC+1',
        },
        duration: null,
        id: undefined,
        origin: {
          country: {
            code: null,
            flagURL: null,
            id: null,
            locationId: null,
            name: null,
            slug: null,
          },
          id: 'BCN',
          locationId: 'BCN',
          name: null,
          slug: null,
          timezone: 'UTC+1',
        },
        transporter: { name: null },
        vehicle: { type: null, uniqueNo: 'undefined' },
      },
    ],
    stopoverDuration: null,
  },
  {
    arrivalTime: { local: null, utc: null },
    departureTime: { local: null, utc: null },
    destination: {
      country: {
        code: null,
        flagURL: null,
        id: null,
        locationId: null,
        name: null,
        slug: null,
      },
      id: 'OSL',
      locationId: 'OSL',
      name: null,
      slug: null,
      timezone: 'UTC+1',
    },
    duration: null,
    origin: {
      country: {
        code: null,
        flagURL: null,
        id: null,
        locationId: null,
        name: null,
        slug: null,
      },
      id: 'PRG',
      locationId: 'PRG',
      name: null,
      slug: null,
      timezone: 'UTC+1',
    },
    segments: [
      {
        arrivalTime: { local: null, utc: null },
        departureTime: { local: null, utc: null },
        destination: {
          country: {
            code: null,
            flagURL: null,
            id: null,
            locationId: null,
            name: null,
            slug: null,
          },
          id: 'OSL',
          locationId: 'OSL',
          name: null,
          slug: null,
          timezone: 'UTC+1',
        },
        duration: null,
        id: undefined,
        origin: {
          country: {
            code: null,
            flagURL: null,
            id: null,
            locationId: null,
            name: null,
            slug: null,
          },
          id: 'PRG',
          locationId: 'PRG',
          name: null,
          slug: null,
          timezone: 'UTC+1',
        },
        transporter: { name: null },
        vehicle: { type: null, uniqueNo: 'undefined' },
      },
    ],
    stopoverDuration: null,
  },
];

export const unsortedRoute = [
  {
    airline: 'WY',
    cityFrom: 'Dubai',
    cityTo: 'Muscat',
    flight_no: 614,
    flyFrom: 'DXB',
    flyTo: 'MCT',
    id: '4163850804521151_0',
    local_arrival: '2019-03-12T00:25:00.000Z',
    local_departure: '2019-03-11T23:15:00.000Z',
    utc_arrival: '2019-03-11T20:25:00.000Z',
    utc_departure: '2019-03-11T19:15:00.000Z',
    vehicle_type: 'aircraft',
  },
  {
    airline: 'DY',
    cityFrom: 'Oslo',
    cityTo: 'Dubai',
    flight_no: 1932,
    flyFrom: 'OSL',
    flyTo: 'DXB',
    id: '3964839811248004_0',
    local_arrival: '2019-03-11T09:00:00.000Z',
    local_departure: '2019-03-10T23:00:00.000Z',
    utc_arrival: '2019-03-11T05:00:00.000Z',
    utc_departure: '2019-03-10T22:00:00.000Z',
    vehicle_type: 'aircraft',
  },

  {
    airline: 'WY',
    cityFrom: 'Muscat',
    cityTo: 'Kathmandu',
    flight_no: 331,
    flyFrom: 'MCT',
    flyTo: 'KTM',
    id: '4163850804521151_1',
    local_arrival: '2019-03-12T08:50:00.000Z',
    local_departure: '2019-03-12T03:25:00.000Z',
    utc_arrival: '2019-03-12T03:05:00.000Z',
    utc_departure: '2019-03-11T23:25:00.000Z',
    vehicle_type: 'aircraft',
  },
];

export const sortedRoute = [
  {
    airline: 'DY',
    cityFrom: 'Oslo',
    cityTo: 'Dubai',
    flight_no: 1932,
    flyFrom: 'OSL',
    flyTo: 'DXB',
    id: '3964839811248004_0',
    local_arrival: '2019-03-11T09:00:00.000Z',
    local_departure: '2019-03-10T23:00:00.000Z',
    utc_arrival: '2019-03-11T05:00:00.000Z',
    utc_departure: '2019-03-10T22:00:00.000Z',
    vehicle_type: 'aircraft',
  },
  {
    airline: 'WY',
    cityFrom: 'Dubai',
    cityTo: 'Muscat',
    flight_no: 614,
    flyFrom: 'DXB',
    flyTo: 'MCT',
    id: '4163850804521151_0',
    local_arrival: '2019-03-12T00:25:00.000Z',
    local_departure: '2019-03-11T23:15:00.000Z',
    utc_arrival: '2019-03-11T20:25:00.000Z',
    utc_departure: '2019-03-11T19:15:00.000Z',
    vehicle_type: 'aircraft',
  },
  {
    airline: 'WY',
    cityFrom: 'Muscat',
    cityTo: 'Kathmandu',
    flight_no: 331,
    flyFrom: 'MCT',
    flyTo: 'KTM',
    id: '4163850804521151_1',
    local_arrival: '2019-03-12T08:50:00.000Z',
    local_departure: '2019-03-12T03:25:00.000Z',
    utc_arrival: '2019-03-12T03:05:00.000Z',
    utc_departure: '2019-03-11T23:25:00.000Z',
    vehicle_type: 'aircraft',
  },
];
