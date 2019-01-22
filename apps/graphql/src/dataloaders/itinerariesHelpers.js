// @flow

import * as DateFNS from 'date-fns';

export const getCountry = (name: ?string, code: ?string) => ({
  id: 'aaa',
  name: name ?? '',
  code: code ?? '',
  slug: 'slug',
  flagURL: 'flagUrl',
});

export const getVehicle = () => ({
  type: 'bus',
  uniqueNo: '1234',
});

export const getProvider = () => ({
  id: 'ads',
  name: 'Ryan Air',
});

export const getDate = (local: string, utc: string) => ({
  local: DateFNS.parse(local),
  utc: DateFNS.parse(utc),
});

export const getLocation = (
  locationId: string,
  name?: ?string,
  countryName?: ?string,
  countryCode?: ?string,
) => ({
  id: '',
  locationId: locationId ?? '',
  name: name ?? '',
  timezone: 'UTC+1',
  country: getCountry(countryName, countryCode),
});
