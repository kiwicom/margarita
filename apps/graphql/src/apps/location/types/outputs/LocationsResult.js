// @flow strict

import { GraphQLUnionType } from 'graphql';

import {
  TimeoutErrorObject,
  ResponseErrorObject,
} from '../../../../services/helpers/ErrorsObjects';
import GraphQLocationsConnection from './LocationsConnection';
import GrapQLHttpResponseError from '../../../common/types/outputs/errors/HttpResponseError';
import GrapQLHttpTimeoutError from '../../../common/types/outputs/errors/HttpTimeoutError';

const LocationsResult = new GraphQLUnionType({
  name: 'LocationsResult',
  types: [
    GraphQLocationsConnection,
    GrapQLHttpResponseError,
    GrapQLHttpTimeoutError,
  ],
  resolveType(root) {
    if (root instanceof ResponseErrorObject) {
      return GrapQLHttpResponseError;
    }
    if (root instanceof TimeoutErrorObject) {
      return GrapQLHttpTimeoutError;
    }
    return GraphQLocationsConnection;
  },
});

export default LocationsResult;
