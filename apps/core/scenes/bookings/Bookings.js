// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from '@kiwicom/margarita-relay';

import BookingList from './BookingList';
import type { BookingsQueryResponse } from './__generated__/BookingsQuery.graphql';

export default class Bookings extends React.Component<{||}> {
  renderInner = (props: BookingsQueryResponse) => {
    // $FlowExpectedError: react-relay flow types are in bad shape, https://github.com/facebook/relay/issues/2516#issuecomment-459681737
    return <BookingList data={props.customerBookings} />;
  };

  render() {
    return (
      <QueryRenderer
        query={graphql`
          query BookingsQuery {
            customerBookings {
              ...BookingList
            }
          }
        `}
        render={this.renderInner}
      />
    );
  }
}
