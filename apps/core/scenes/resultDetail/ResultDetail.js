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
} from '../../contexts/searchContext/SearchContext';

type Props = {|
  +bookingToken: string,
  +adults: number,
  +infants: number,
  +setContextBookingToken: string => void,
  +setSearchContextPassengerData: Object => void,
  +passengers: {
    +adults: number,
    +infants: number,
  },
|};

class ResultDetail extends React.Component<Props> {
  componentDidMount() {
    const {
      bookingToken,
      setContextBookingToken,
      setSearchContextPassengerData,
      adults,
      infants,
      passengers,
    } = this.props;
    setContextBookingToken(bookingToken);

    // set the SearchContext status if it is not
    if (passengers.adults !== adults && passengers.infants !== infants) {
      setSearchContextPassengerData({ adults, infants });
    }
  }

  renderInner = (data: ResultDetailQueryResponse) => {
    return <ResultDetailInner data={data} />;
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
            bags: 0, //  @TODO - use data from passengers forms
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
}: BookingContextState) => ({
  setContextBookingToken: setBookingToken,
});

const selectSearchContextState = ({
  actions: { setPassengerData },
  infants,
  adults,
}: SearchContextState) => ({
  passengers: {
    infants,
    adults,
  },
  setSearchContextPassengerData: setPassengerData,
});
export default withSearchContext(selectSearchContextState)(
  withBookingContext(bookingContextState)(ResultDetail),
);
