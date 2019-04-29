// @flow

export const oneWayRoutesMap = [['TRF', 'PRG']];
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

export const twoWayRoutesMap = [['OSL', 'PRG'], ['PRG', 'OSL']];
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
