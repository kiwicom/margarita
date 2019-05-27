// @flow

import * as React from 'react';
import {
  graphql,
  createRefetchContainer,
  type RelayRefetchProp,
} from '@kiwicom/margarita-relay';
import { IllustrationWithInformation } from '@kiwicom/margarita-components';

import type { ResultDetailInner_data as ResultDetailInnerType } from './__generated__/ResultDetailInner_data.graphql';
import ResultDetailContent from './resultDetailContent/ResultDetailContent';

type Props = {|
  +data: ?ResultDetailInnerType,
  +relay: RelayRefetchProp,
  +bookingToken: ?string,
  +passengers: {| +infants: ?number, +adults: ?number |},
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
    if (
      this.props.data?.checkItinerary?.isChecked !==
      prevProps.data?.checkItinerary?.isChecked
    ) {
      this.stopItineraryCheck();
      this.tryStartItineraryCheck();
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
      const param = {
        input: {
          bookingToken: this.props.bookingToken,
          bags: 0, // @TODO from the search form
          passengers: this.props.passengers,
        },
      };

      this.checkInterval = setInterval(() => {
        this.props.relay.refetch(param);
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

export default createRefetchContainer(
  ResultDetailInner,
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
