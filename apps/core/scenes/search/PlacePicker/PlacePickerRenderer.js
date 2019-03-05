// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from '@kiwicom/margarita-relay';

import type { PlacePickerRendererQueryResponse } from './__generated__/PlacePickerRendererQuery.graphql';
import PlacePickerContent from './PlacePickerContent';

// @TODO s set the QueryRenderer variables base on closest location

const renderInner = (data: PlacePickerRendererQueryResponse) => (
  <PlacePickerContent locations={data} />
);

export default function PlacePickerRenderer() {
  return (
    <QueryRenderer
      query={graphql`
        query PlacePickerRendererQuery {
          ...PlacePickerContent_locations
        }
      `}
      render={renderInner}
    />
  );
}
