// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from '@kiwicom/margarita-relay';

import type { PlacePickerRendererQueryResponse } from './__generated__/PlacePickerRendererQuery.graphql';
import PlacePickerContent from './PlacePickerContent';
import { type Location } from '../SearchContext';

type Props = {|
  +defaultPlace: ?Location,
|};

export default class PlacePickerRenderer extends React.Component<Props> {
  renderInner = (data: PlacePickerRendererQueryResponse) => {
    return <PlacePickerContent locations={data} />;
  };

  getInputVariable = () => {
    const term = this.props.defaultPlace?.locationId || '';
    return { input: { term } };
  };

  render() {
    return (
      <QueryRenderer
        query={graphql`
          query PlacePickerRendererQuery($input: LocationsByTermInput!) {
            ...PlacePickerContent_locations @arguments(input: $input)
          }
        `}
        variables={this.getInputVariable()}
        render={this.renderInner}
      />
    );
  }
}
