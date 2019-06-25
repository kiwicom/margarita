// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from '@kiwicom/margarita-relay';

import type { ResultDetailQueryResponse } from './__generated__/ResultDetailQuery.graphql';
import ResultDetailInner from './ResultDetailInner';
import {
  withSearchContext,
  type Passengers,
  type SearchContextState,
} from '../../contexts/searchContext';

type Props = {|
  +context: {|
    +bookingToken: ?string,
    +adults: number,
    +infants: number,
    +setPassengerData: Passengers => void,
  |},
|};

class ResultDetail extends React.Component<Props> {
  renderInner = (data: ResultDetailQueryResponse) => {
    const { context } = this.props;
    const passengers = {
      infants: context.infants,
      adults: context.adults,
    };
    return (
      <ResultDetailInner
        data={data}
        bookingToken={context.bookingToken}
        passengers={passengers}
      />
    );
  };

  render() {
    const {
      context: { bookingToken, adults, infants },
    } = this.props;

    return (
      <QueryRenderer
        query={graphql`
          query ResultDetailQuery($input: ItineraryCheckInput!) {
            ...ResultDetailInner_data @arguments(input: $input)
          }
        `}
        variables={{
          input: {
            bookingToken,
            bags: 0, // @TODO from search form
            passengers: { adults, infants },
          },
        }}
        render={this.renderInner}
      />
    );
  }
}

const selectSearchContextState = ({
  actions: { setPassengerData },
  infants,
  adults,
  bookingToken,
}: SearchContextState) => ({
  context: {
    infants,
    adults,
    setPassengerData,
    bookingToken,
  },
});
export default withSearchContext(selectSearchContextState)(ResultDetail);
