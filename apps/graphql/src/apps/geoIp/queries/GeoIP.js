// @flow

import { GraphQLString } from 'graphql';

import GraphQLGeoIPType from '../types/outputs/GeoIP';
import geoIPFech from '../apis';

type Args = {|
  +ip: string,
|};

const geoIPQuery = {
  type: GraphQLGeoIPType,
  description:
    'Geography info by an IP address, if no input provided, it will use request client IP',
  args: {
    ip: {
      type: GraphQLString,
    },
  },
  resolve: (_: mixed, args: Args, { clientIP }: { clientIP: string }) => {
    const ip = args.ip ?? clientIP;

    return geoIPFech(ip);
  },
};

export default geoIPQuery;
