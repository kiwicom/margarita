// @flow

import {
  getItineraryType,
  sanitizeCarrier,
  mapSectors,
  mapVehicle,
} from '../Itineraries';
import {
  oneWayRoutesList,
  oneWayRoutesMap,
  twoWayRoutesList,
  twoWayRoutesMap,
} from '../../__datasets__/itinerariesMock';

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
