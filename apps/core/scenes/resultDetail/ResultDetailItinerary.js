// @flow

import * as React from 'react';
import { Text, Loader } from '@kiwicom/universal-components';
import {
  graphql,
  createRefetchContainer,
  type RelayRefetchProp,
} from '@kiwicom/margarita-relay';

import type { ResultDetailItinerary_data as ResultDetailItineraryType } from './__generated__/ResultDetailItinerary_data.graphql';

type Props = {|
  +data: ?ResultDetailItineraryType,
  +relay: RelayRefetchProp,
|};

/**
 * NOTE:
 * `REFETCH_INTERVAL` - interval in which itinerary validity is checked
 * `REFETCH_TIMEOUT` - time limit for validity check, if validity is not
 * successfully checked within this limit, timeout error content is show
 */
const REFETCH_INTERVAL = 5 * 1000;
const REFETCH_TIMEOUT = 30 * 60 * 1000;

class ResultDetailItinerary extends React.Component<Props> {
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
      return <Text>Not valid booking</Text>;
    }

    return (
      <>
        {!this.props.data?.checkItinerary?.isChecked && <Loader size="small" />}
        <Text>
          {`Checked: ${
            this.props.data?.checkItinerary?.isChecked ? 'YES' : 'NO'
          }`}
        </Text>
      </>
    );
  }
}

export default createRefetchContainer(
  ResultDetailItinerary,
  {
    data: graphql`
      fragment ResultDetailItinerary_data on RootQuery
        @argumentDefinitions(input: { type: "ItineraryCheckInput!" }) {
        checkItinerary(input: $input) {
          isChecked
          isValid
        }
      }
    `,
  },
  graphql`
    query ResultDetailItineraryQuery($input: ItineraryCheckInput!) {
      ...ResultDetailItinerary_data @arguments(input: $input)
    }
  `,
);
