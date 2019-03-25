// @flow

import { GraphQLString, GraphQLNonNull } from 'graphql';

import GraphQLGeoIPType from '../types/outputs/GeoIP';
import geoIPFech from '../apis';

type Args = {|
  +ip: string,
|};

const geoIPQuery = {
  type: GraphQLGeoIPType,
  description: 'Geography info by an IP address',
  args: {
    ip: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (_: mixed, { ip }: Args) => geoIPFech(ip),
};

export default geoIPQuery;
