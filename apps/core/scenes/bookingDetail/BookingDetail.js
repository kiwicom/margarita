// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from '@kiwicom/margarita-relay';
import { Text } from '@kiwicom/universal-components';

import TripDetails from './tripDetails/TripDetails';
import type { BookingDetailQueryResponse } from './__generated__/BookingDetailQuery.graphql';

type Props = {|
  +bookingId: ?string,
|};

export default class BookingDetail extends React.Component<Props> {
  renderInner = (props: BookingDetailQueryResponse) => {
    return <TripDetails data={props.bookingDetail} />;
  };

  render() {
    if (this.props.bookingId == null) {
      return <Text>You must pass a booking id</Text>;
    }
    return (
      <QueryRenderer
        query={graphql`
          query BookingDetailQuery($id: ID!) {
            bookingDetail(id: $id) {
              ...TripDetails
            }
          }
        `}
        variables={{ id: this.props.bookingId }}
        render={this.renderInner}
      />
    );
  }
}
