// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from '@kiwicom/margarita-relay';

import type { PlacePickerRendererQueryResponse } from './__generated__/PlacePickerRendererQuery.graphql';
import PlacePickerContent from './PlacePickerContent';

type Props = {|
  +type: string,
  +defaultValue: ?string,
  +onChoose: string => void,
  +setModalType: string => void,
|};

export default class PlacePickerRenderer extends React.Component<Props> {
  renderInner = (data: PlacePickerRendererQueryResponse) => {
    return (
      <PlacePickerContent
        type={this.props.type}
        locations={data}
        onChoose={this.props.onChoose}
      />
    );
  };

  render() {
    return (
      <QueryRenderer
        query={graphql`
          query PlacePickerRendererQuery($input: LocationsByTermInput!) {
            ...PlacePickerContent_locations @arguments(input: $input)
          }
        `}
        variables={{ input: { term: this.props.defaultValue ?? '' } }}
        render={this.renderInner}
      />
    );
  }
}
