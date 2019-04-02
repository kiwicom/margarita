// @flow

import * as React from 'react';
import { graphql, QueryRenderer } from '@kiwicom/margarita-relay';

import type { OneWayResultsQueryResponse } from './__generated__/OneWayResultsQuery.graphql';

type Props = {|
  +variables: Object,
  +render: OneWayResultsQueryResponse => React.Element<any>,
|};

export default function OneWayResultQuery(props: Props) {
  return (
    <QueryRenderer
      query={graphql`
        query OneWayResultsQuery($input: ItinerariesOneWaySearchInput!) {
          searchData: searchOneWayItineraries(input: $input) {
            ...ResultsList_data
          }
        }
      `}
      variables={props.variables}
      render={props.render}
    />
  );
}
