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
  +bookingContext: {|
    +bookingToken: ?string,
    +setBookingToken: string => void,
  |},
  +searchContext: {|
    +adults: number,
    +infants: number,
    +setPassengerData: PassengersData => void,
  |},
|};

class ResultDetail extends React.Component<Props> {
  componentDidMount() {
    const {
      bookingToken,
      adults,
      infants,
      searchContext,
      bookingContext,
    } = this.props;

    bookingContext.setBookingToken(bookingToken);

    // set the SearchContext state if it is not
    if (searchContext.adults !== adults && searchContext.infants !== infants) {
      searchContext.setPassengerData({ adults, infants });
    }
  }

  renderInner = (data: ResultDetailQueryResponse) => {
    const { bookingContext, searchContext } = this.props;
    const passengers = {
      infants: searchContext.infants,
      adults: searchContext.adults,
    };
    return (
      <ResultDetailInner
        data={data}
        bookingToken={bookingContext.bookingToken}
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

const bookingContextState = ({
  actions: { setBookingToken },
  bookingToken,
}: BookingContextState) => ({
  bookingContext: {
    bookingToken,
    setBookingToken,
  },
});

const selectSearchContextState = ({
  actions: { setPassengerData },
  infants,
  adults,
}: SearchContextState) => ({
  searchContext: {
    infants,
    adults,
    setPassengerData,
  },
});
export default withSearchContext(selectSearchContextState)(
  withBookingContext(bookingContextState)(ResultDetail),
);
