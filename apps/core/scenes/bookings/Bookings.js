// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from '@kiwicom/margarita-relay';

import BookingList from './BookingList';
import type { BookingsQueryResponse } from './__generated__/BookingsQuery.graphql';

export default class Bookings extends React.Component<{||}> {
  renderInner = (props: BookingsQueryResponse) => {
    return <BookingList data={props.customerBookings} />;
  };

  render() {
    return (
      <QueryRenderer
        query={graphql`
          query BookingsQuery {
            customerBookings {
              ...BookingList_data
            }
          }
        `}
        render={this.renderInner}
      />
    );
  }
}
