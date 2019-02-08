// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from '@kiwicom/margarita-relay';

import type { PlacePickerRendererQueryResponse } from './__generated__/PlacePickerRendererQuery.graphql';
import PlacePickerRefetchContainer from './PlacePickerRefetchContainer';
import { type Location } from '../SearchContext';

type Props = {|
  +defaultPlace: ?Location,
|};

export default class PlacePickerRenderer extends React.Component<Props> {
  renderInner = (data: PlacePickerRendererQueryResponse) => {
    return <PlacePickerRefetchContainer locations={data} />;
  };

  setInputVariable = () => {
    const term = this.props.defaultPlace?.locationId || '';
    return { input: { term } };
  };

  render() {
    return (
      <QueryRenderer
        query={graphql`
          query PlacePickerRendererQuery($input: LocationsByTermInput!) {
            ...PlacePickerRefetchContainer_locations @arguments(input: $input)
          }
        `}
        variables={this.setInputVariable()}
        render={this.renderInner}
      />
    );
  }
}
