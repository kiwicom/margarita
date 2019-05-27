// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from '@kiwicom/margarita-relay';

import type { ResultDetailQueryResponse } from './__generated__/ResultDetailQuery.graphql';
import ResultDetailInner from './ResultDetailInner';
import {
  withBookingContext,
  type BookingContextState,
} from '../../contexts/bookingContext/BookingContext';
import {
  withSearchContext,
  type SearchContextState,
  type PassengersData,
} from '../../contexts/searchContext/SearchContext';

type Props = {|
  +adults: number,
  +infants: number,
  +bookingToken: string,
  +context: {|
    +bookingToken: ?string,
    +setBookingToken: string => void,
    +adults: number,
    +infants: number,
    +setPassengerData: PassengersData => void,
  |},
|};

class ResultDetail extends React.Component<Props> {
  componentDidMount() {
    const { bookingToken, adults, infants, context } = this.props;

    context.setBookingToken(bookingToken);

    // set the SearchContext state if it is not
    if (context.adults !== adults && context.infants !== infants) {
      context.setPassengerData({ adults, infants });
    }
  }

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
    const { bookingToken, adults, infants } = this.props;
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
  actions: { setPassengerData, setBookingToken },
  infants,
  adults,
  bookingToken,
}: SearchContextState) => ({
  context: {
    infants,
    adults,
    setPassengerData,
    setBookingToken,
    bookingToken,
  },
});
export default withSearchContext(selectSearchContextState)(ResultDetail);
