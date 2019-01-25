// @flow

import {
  getCountry,
  getDate,
  getItineraryType,
  getLocation,
  getTransporter,
  getSectors,
  getVehicle,
} from '../itinerariesHelpers';
import {
  oneWaySectors,
  oneWayRoutesList,
  oneWayRoutesMap,
  twoWaySectors,
  twoWayRoutesList,
  twoWayRoutesMap,
} from './itinerariesMock';

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

describe('getTransporter', () => {
  const name = 'Ryan Air';
  it('returns proper structure of the Transporter object', () => {
    expect(getTransporter(name)).toMatchObject({
      name,
    });
  });
});

describe('getSectors', () => {
  it('returns an array with two Sectors for return flight', () => {
    expect(getSectors(twoWayRoutesList, twoWayRoutesMap)).toEqual(
      twoWaySectors,
    );
  });
  it('returns an array with one Sector for one-way flight', () => {
    expect(getSectors(oneWayRoutesList, oneWayRoutesMap)).toEqual(
      oneWaySectors,
    );
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
