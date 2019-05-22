// @flow

import * as React from 'react';
import {
  graphql,
  createRefetchContainer,
  type RelayRefetchProp,
} from '@kiwicom/margarita-relay';
import { IllustrationWithInformation } from '@kiwicom/margarita-components';

import {
  withBookingContext,
  type BookingContextState,
  type PassengerType,
} from '../../contexts/bookingContext/BookingContext.js';
import type { ResultDetailInner_data as ResultDetailInnerType } from './__generated__/ResultDetailInner_data.graphql';
import ResultDetailContent from './resultDetailContent/ResultDetailContent';

type Props = {|
  +data: ?ResultDetailInnerType,
  +relay: RelayRefetchProp,
  +passengers: Array<PassengerType>,
  +bookingToken: ?string,
|};

/**
 * NOTE:
 * `REFETCH_INTERVAL` - interval in which itinerary validity is checked
 * `REFETCH_TIMEOUT` - time limit for validity check, if validity is not
 * successfully checked within this limit, timeout error content is show
 */
const REFETCH_INTERVAL = 5 * 1000;
const REFETCH_TIMEOUT = 30 * 60 * 1000;

class ResultDetailInner extends React.Component<Props> {
  componentDidMount() {
    this.tryStartItineraryCheck();
  }

  componentDidUpdate(prevProps) {
    const { passengers, data, relay, bookingToken } = this.props;
    const numPassengers = passengers.length;
    const passengersChanged = prevProps.passengers.length !== numPassengers;
    const checkedChanged =
      data?.checkItinerary?.isChecked !==
      prevProps.data?.checkItinerary?.isChecked;

    if (checkedChanged || passengersChanged) {
      if (passengersChanged) {
        const newPassengerInput = {
          adults: numPassengers !== 0 ? numPassengers : 1,
          infants: 0,
        };
        relay.refetch({
          input: {
            passengers: newPassengerInput,
            bags: 0,
            bookingToken,
          },
        });
      } else {
        this.stopItineraryCheck();
        this.tryStartItineraryCheck();
      }
    }
  }

  componentWillUnmount() {
    this.stopItineraryCheck();
  }

  checkInterval: IntervalID;
  checkTimeout: TimeoutID;

  tryStartItineraryCheck = () => {
    if (
      this.props.data?.checkItinerary?.isValid &&
      !this.props.data?.checkItinerary?.isChecked
    ) {
      this.checkInterval = setInterval(() => {
        this.props.relay.refetch();
      }, REFETCH_INTERVAL);

      this.checkTimeout = setTimeout(() => {
        this.itineraryCheckTimeout();
      }, REFETCH_TIMEOUT);
    }
  };

  stopItineraryCheck = () => {
    clearInterval(this.checkInterval);
    clearTimeout(this.checkTimeout);
  };

  itineraryCheckTimeout = () => {
    // @TODO - show timeout error message/content
    this.stopItineraryCheck();
  };

  render() {
    if (!this.props.data?.checkItinerary?.isValid) {
      return (
        <IllustrationWithInformation
          illustrationName="NoResults"
          text="Sorry, booking is not valid"
          description="Booking is not valid or no longer available"
        />
      );
    }
    return <ResultDetailContent itinerary={this.props.data?.checkItinerary} />;
  }
}

const bookingContextState = ({ passengers }: BookingContextState) => ({
  passengers,
});

export default createRefetchContainer(
  withBookingContext(bookingContextState)(ResultDetailInner),
  {
    data: graphql`
      fragment ResultDetailInner_data on RootQuery
        @argumentDefinitions(input: { type: "ItineraryCheckInput!" }) {
        checkItinerary(input: $input) {
          isChecked
          isValid
          ...ResultDetailContent_itinerary
        }
      }
    `,
  },
  graphql`
    query ResultDetailInnerQuery($input: ItineraryCheckInput!) {
      ...ResultDetailInner_data @arguments(input: $input)
    }
  `,
);
