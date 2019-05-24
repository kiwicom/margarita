// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from '@kiwicom/margarita-relay';

import type { ResultDetailQueryResponse } from './__generated__/ResultDetailQuery.graphql';
import ResultDetailInner from './ResultDetailInner';
import {
  withBookingContext,
  type BookingContextState,
} from '../../contexts/bookingContext/BookingContext';

type Props = {|
  +bookingToken: string,
  +adults: number,
  +infants: number,
  +setContextBookingToken: string => void,
|};

class ResultDetail extends React.Component<Props> {
  componentDidMount() {
    const { bookingToken, setContextBookingToken } = this.props;
    setContextBookingToken(bookingToken);
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

export default withBookingContext(bookingContextState)(ResultDetail);
