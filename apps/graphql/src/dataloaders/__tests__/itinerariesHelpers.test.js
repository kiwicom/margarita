// @flow

import {
  getCountry,
  getDate,
  getItineraryType,
  getLocation,
  getProvider,
  getSectors,
  getVehicle,
} from '../itinerariesHelpers';

describe('getCountry', () => {
  const name = 'Czech republic';
  const code = 'CZ';
  it('returns proper structure of the Country object', () => {
    expect(getCountry(name, code)).toMatchObject({
      name: name,
      code: code,
      slug: 'slug',
      flagURL: 'flagUrl',
    });
  });
});

describe('getDate', () => {
  it('returns proper structure of the Date object', () => {
    const local = new Date('2019-05-13T15:30:00.000Z');
    const utc = new Date('2019-05-13T13:30:00.000Z');
    expect(getDate(local, utc)).toMatchObject({
      local: local,
      utc: utc,
    });
  });
});

describe('getItineraryType', () => {
  const routesForReturnFlight = [['OSL', 'PRG'], ['PRG', 'OSL']];
  const routesForOneWayFlight = [['OSL', 'PRG']];
  it('returns return flight type', () => {
    expect(getItineraryType(routesForReturnFlight)).toBe('return');
  });
  it('returns one-way flight type', () => {
    expect(getItineraryType(routesForOneWayFlight)).toBe('oneway');
  });
});

describe('getLocation', () => {
  it('returns proper structure of the Location object', () => {
    const locationId = 'PRG';
    const name = 'Prague';
    const countryName = 'Czech republic';
    const countryCode = 'CZ';
    expect(
      getLocation(locationId, name, countryName, countryCode),
    ).toMatchObject({
      locationId,
      name,
      country: {
        name: countryName,
        code: countryCode,
      },
    });
  });
});

describe('getProvider', () => {
  const name = 'Ryan Air';
  it('returns proper structure of the Provider object', () => {
    expect(getProvider(name)).toMatchObject({
      name,
    });
  });
});

describe('getSectors', () => {
  it('returns an array with two Sectors for return flight', () => {
    const routesList = [
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
    const routesMap = [['OSL', 'PRG'], ['PRG', 'OSL']];
    expect(getSectors(routesList, routesMap)).toEqual([
      [
        {
          flyFrom: 'OSL',
          flyTo: 'BCN',
        },
        {
          flyFrom: 'BCN',
          flyTo: 'PRG',
        },
      ],
      [
        {
          flyFrom: 'PRG',
          flyTo: 'OSL',
        },
      ],
    ]);
  });
  it('returns an array with one Sector for one-way flight', () => {
    const routesList = [
      {
        flyFrom: 'OSL',
        flyTo: 'PRG',
      },
    ];
    const routesMap = [['OSL', 'PRG']];
    expect(getSectors(routesList, routesMap)).toEqual([
      [
        {
          flyFrom: 'OSL',
          flyTo: 'PRG',
        },
      ],
    ]);
  });
});

describe('getVehicle', () => {
  const type = 'aircraft';
  const uniqueNo = '123456';
  it('returns proper structure of the Vehicle object', () => {
    expect(getVehicle(type, uniqueNo)).toMatchObject({
      type: type,
      uniqueNo: uniqueNo,
    });
  });
});
