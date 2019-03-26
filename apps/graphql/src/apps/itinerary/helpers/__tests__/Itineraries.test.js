// @flow

import {
  mapLocationArea,
  mapDate,
  getItineraryType,
  mapLocation,
  mapTransporter,
  mapSectors,
  mapVehicle,
  differenceInMinutes,
  mapToOpaqueID,
} from '../Itineraries';
import {
  oneWayRoutesList,
  oneWayRoutesMap,
  twoWayRoutesList,
  twoWayRoutesMap,
} from '../../__mocks__/itinerariesMock';

describe('mapLocationArea', () => {
  const name = 'Czech republic';
  const code = 'CZ';
  const slug = 'slug';
  const flagURL = 'flag';
  it('returns proper structure of the Location Area object', () => {
    expect(mapLocationArea(code, code, name, slug, flagURL)).toMatchObject({
      id: code,
      locationId: code,
      name,
      code,
      slug,
      flagURL,
    });
  });
  it('returns empty structure of the Location Area object', () => {
    expect(mapLocationArea()).toMatchObject({
      id: null,
      locationId: null,
      name: null,
      code: null,
      slug: null,
      flagURL: null,
    });
  });
});

describe('mapDate', () => {
  it('returns proper structure of the Date object', () => {
    const local = '2019-05-13T15:30:00.000Z';
    const utc = '2019-05-13T13:30:00.000Z';
    expect(mapDate(local, utc)).toMatchObject({
      local: local,
      utc: utc,
    });
  });
  it('returns empty structure of the Date object', () => {
    expect(mapDate()).toMatchObject({
      local: null,
      utc: null,
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
  it('returns null flight type', () => {
    expect(getItineraryType()).toBeNull();
  });
});

describe('mapLocation', () => {
  it('returns proper structure of the Location object', () => {
    const locationId = 'PRG';
    const name = 'Prague';
    const countryName = 'Czech republic';
    const countryCode = 'CZ';
    expect(
      mapLocation(locationId, name, countryName, countryCode),
    ).toMatchObject({
      locationId,
      name,
      country: {
        name: countryName,
        code: countryCode,
      },
    });
  });
  it('returns empty structure of the Location object', () => {
    expect(mapLocation()).toMatchObject({
      locationId: null,
      name: null,
      country: {
        name: null,
        code: null,
      },
    });
  });
});

describe('mapTransporter', () => {
  const name = 'Ryan Air';
  it('returns proper structure of the Transporter object', () => {
    expect(mapTransporter(name)).toMatchObject({
      name,
    });
  });
  it('returns empty structure of the Transporter object', () => {
    expect(mapTransporter()).toMatchObject({
      name: null,
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

describe('mapToOpaqueID', () => {
  const searchParams = {
    order: 'DESC',
    sort: 'quality',
    passengers: {
      adults: 1,
      children: 0,
      infants: 0,
    },
    itinerary: {
      origin: {
        ids: ['MGL'],
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
  it('returns proper formatted ID', () => {
    expect(mapToOpaqueID(searchParams)).toMatchObject({
      order: 'DESC',
      sort: 'quality',
      passengers: {
        adults: 1,
        children: 0,
        infants: 0,
      },
      itinerary: {
        origin: {
          ids: ['0b'],
        },
        destination: {
          ids: ['I3'],
        },
        outboundDate: {
          start: new Date('2019-05-01'),
          end: new Date('2019-05-03'),
        },
      },
    });
  });
});
