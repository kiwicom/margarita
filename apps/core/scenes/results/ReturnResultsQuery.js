// @flow

import * as React from 'react';
import { graphql, QueryRenderer } from '@kiwicom/margarita-relay';

import type { ReturnResultsQueryResponse } from './__generated__/ReturnResultsQuery.graphql';

type Props = {|
  +variables: Object,
  +render: ReturnResultsQueryResponse => React.Element<any>,
|};

export default function ReturnResultsQuery(props: Props) {
  return (
    <QueryRenderer
      query={graphql`
        query ReturnResultsQuery($input: ItinerariesReturnSearchInput!) {
          searchData: searchReturnItineraries(input: $input) {
            ...ResultsList_data
          }
        }
      `}
      variables={props.variables}
      render={props.render}
    />
  );
}
