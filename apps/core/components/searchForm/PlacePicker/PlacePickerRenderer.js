// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from '@kiwicom/margarita-relay';

import type { PlacePickerRendererQueryResponse } from './__generated__/PlacePickerRendererQuery.graphql';
import PlacePickerContent from './PlacePickerContent';
import {
  PLACE_TYPE,
  type PlaceType,
} from '../../../scenes/search/SearchConstants';

// @TODO s set the QueryRenderer variables base on closest location

type Props = {|
  +placeType: PlaceType,
  +onClose: () => void,
  +onPlaceSelect: () => void,
|};

export default class PlacePickerRenderer extends React.Component<Props> {
  renderInner = (data: PlacePickerRendererQueryResponse) => {
    const { placeType, onClose, onPlaceSelect } = this.props;
    return (
      <PlacePickerContent
        pickerType={this.getPickerType(placeType)}
        locations={data}
        onClose={onClose}
        onPlaceSelect={onPlaceSelect}
      />
    );
  };

  getPickerType = (placeType: PlaceType) => {
    switch (placeType) {
      case PLACE_TYPE.DESTINATION:
        return 'travelTo';
      case PLACE_TYPE.ORIGIN:
        return 'travelFrom';
      default:
        return null;
    }
  };

  render() {
    return (
      <QueryRenderer
        loaderText="Locations are loading..."
        query={graphql`
          query PlacePickerRendererQuery {
            ...PlacePickerContent_locations
          }
        `}
        render={this.renderInner}
      />
    );
  }
}
