// @flow strict

import { GraphQLUnionType } from 'graphql';

import { HttpErrorObject } from '../../../../services/helpers/HttpErrorObject';
import GraphQLocationsConnection from './LocationsConnection';
import GrapQLHttpError from '../../../common/types/outputs/errors/HttpError';

const LocationsResult = new GraphQLUnionType({
  name: 'LocationsResult',
  types: [GraphQLocationsConnection, GrapQLHttpError],
  resolveType(root) {
    if (root instanceof HttpErrorObject) {
      return GrapQLHttpError;
    }
    return GraphQLocationsConnection;
  },
});

export default LocationsResult;
