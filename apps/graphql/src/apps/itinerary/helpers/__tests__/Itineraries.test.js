// @flow

import {
  getItineraryType,
  sanitizeCarrier,
  mapSectors,
  mapVehicle,
  differenceInMinutes,
} from '../Itineraries';
import {
  oneWayRoutesList,
  oneWayRoutesMap,
  twoWayRoutesList,
  twoWayRoutesMap,
} from '../../__mocks__/itinerariesMock';

describe('getItineraryType', () => {
  const routesForReturnFlight = [['OSL', 'PRG'], ['PRG', 'OSL']];
  const routesForOneWayFlight = [['OSL', 'PRG']];
  it('returns return flight type', () => {
    expect(getItineraryType(routesForReturnFlight)).toBe('Return');
  });
  it('returns one-way flight type', () => {
    expect(getItineraryType(routesForOneWayFlight)).toBe('OneWay');
  });
  it('returns null flight type', () => {
    expect(getItineraryType()).toBeNull();
  });
});

describe('sanitizeCarrier', () => {
  const segment = {
    airline: 'VY',
  };
  it('returns proper structure of the Carrier object', () => {
    expect(sanitizeCarrier(segment)).toMatchObject({
      name: 'Vueling Airlines',
      code: 'VY',
    });
  });
  it('returns empty structure of the Carrier object', () => {
    expect(sanitizeCarrier()).toMatchObject({
      name: undefined,
      code: undefined,
    });
  });
});

describe('mapSectors', () => {
  it('returns an array with two Sectors for return flight', () => {
    expect(mapSectors(twoWayRoutesList, twoWayRoutesMap)).toHaveLength(2);
  });
  it('returns an array with one Sector for one-way flight', () => {
    expect(mapSectors(oneWayRoutesList, oneWayRoutesMap)).toHaveLength(1);
  });
  it('returns null if there are not enough of data for getting Sector', () => {
    expect(mapSectors()).toBeNull();
    expect(mapSectors(oneWayRoutesList)).toBeNull();
    expect(mapSectors(null, oneWayRoutesMap)).toBeNull();
  });
});

describe('mapVehicle', () => {
  const type = 'aircraft';
  const uniqueNo = '123456';
  it('returns proper structure of the Vehicle object', () => {
    expect(mapVehicle(type, uniqueNo)).toMatchObject({
      type: type,
      uniqueNo: uniqueNo,
    });
  });
  it('returns empty structure of the Vehicle object', () => {
    expect(mapVehicle()).toMatchObject({
      type: null,
      uniqueNo: null,
    });
  });
});

describe('differenceInMinutes', () => {
  const fromISO = '2019-03-11T10:50:00.000Z';
  const toISO = '2019-03-11T11:55:00.000Z';

  const fromTimestamp = +new Date(fromISO) / 1000;
  const toTimestamp = +new Date(toISO) / 1000;

  it('returns number of minutes between two timestamps', () => {
    expect(differenceInMinutes(fromTimestamp, toTimestamp)).toBe(65);
  });
  it('returns number of minutes between ISO date and timestamp', () => {
    expect(differenceInMinutes(fromISO, toTimestamp)).toBe(65);
  });
  it('returns number of minutes between two ISO dates', () => {
    expect(differenceInMinutes(fromISO, toISO)).toBe(65);
  });
  it('returns null if there are not enough of data for getting difference', () => {
    expect(differenceInMinutes()).toBeNull();
    expect(differenceInMinutes(fromISO)).toBeNull();
    expect(differenceInMinutes(null, toISO)).toBeNull();
  });
});
