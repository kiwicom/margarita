// @flow

import * as React from 'react';
import { Text } from '@kiwicom/universal-components';
import { QueryRenderer, graphql } from '@kiwicom/margarita-relay';

import type { BookingsQueryResponse } from './__generated__/BookingsQuery.graphql';

export default class Bookings extends React.Component<{}> {
  renderInner = (props: BookingsQueryResponse) => {
    const bookings = props.customerBookings?.edges ?? [];
    return (
      <>
        {bookings.map<React.Node>(booking => (
          <Text key={booking?.node?.id}>
            {booking?.node?.id}-{booking?.node?.status}
          </Text>
        ))}
      </>
    );
  };

  render() {
    return (
      <QueryRenderer
        query={graphql`
          query BookingsQuery {
            customerBookings {
              edges {
                node {
                  id
                  status
                }
              }
            }
          }
        `}
        render={this.renderInner}
      />
    );
  }
}
