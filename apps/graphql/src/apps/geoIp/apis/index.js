// @flow

import fetch from '../../../services/fetch/globalFetch';

export type GeoIP = {|
  +isoCountryCode: ?string,
  +latitude?: number,
  +longitude?: number,
|};

const getGeoIP = (ip: string): Promise<GeoIP> =>
  fetch(`https://geoip-api-prod.skypicker.com/geoip-api?ip=${ip}`);

export default getGeoIP;
