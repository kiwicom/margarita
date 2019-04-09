// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from '@kiwicom/margarita-relay';

import type { ResultDetailQueryResponse } from './__generated__/ResultDetailQuery.graphql';
import ResultDetailInner from './ResultDetailInner';

type Props = {|
  +bookingToken: ?string,
|};

export default class ResultDetail extends React.Component<Props> {
  renderInner = (data: ResultDetailQueryResponse) => {
    return <ResultDetailInner data={data} />;
  };

  render() {
    return (
      <QueryRenderer
        query={graphql`
          query ResultDetailQuery($input: ItineraryCheckInput!) {
            ...ResultDetailInner_data @arguments(input: $input)
          }
        `}
        variables={{
          input: {
            bookingToken: this.props.bookingToken,
            bags: 0, // @TODO - use real data from search context
            passengers: { adults: 1 }, // @TODO - use real data
          },
        }}
        render={this.renderInner}
      />
    );
  }
}
