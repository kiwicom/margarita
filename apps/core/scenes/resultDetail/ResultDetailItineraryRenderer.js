// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from '@kiwicom/margarita-relay';

import type { ResultDetailItineraryRendererQueryResponse } from './__generated__/ResultDetailItineraryRendererQuery.graphql';
import ResultDetailItinerary from './ResultDetailItinerary';

type Props = {|
  +bookingToken: ?string,
|};

export default class ResultDetailItineraryRenderer extends React.Component<Props> {
  renderInner = (data: ResultDetailItineraryRendererQueryResponse) => {
    return <ResultDetailItinerary data={data} />;
  };

  render() {
    return (
      <QueryRenderer
        query={graphql`
          query ResultDetailItineraryRendererQuery(
            $input: ItineraryCheckInput!
          ) {
            ...ResultDetailItinerary_data @arguments(input: $input)
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
