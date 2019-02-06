// @flow

import * as React from 'react';
import { Card, StyleSheet } from '@kiwicom/universal-components';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';

import Header from './Header';
import type { TripDetails as BookingType } from './__generated__/TripDetails.graphql';

type Props = {|
  +data: ?BookingType,
|};

function TripDetails(props: Props) {
  return (
    <Card style={styles.card}>
      <Header data={props.data} />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 18,
  },
});

export default createFragmentContainer(
  TripDetails,
  graphql`
    fragment TripDetails on CustomerBooking {
      ...Header
    }
  `,
);
