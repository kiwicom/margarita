// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';
import { FlatList, View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';

import type { BookingList as BookingListType } from './__generated__/BookingList.graphql';
import Booking from './Booking';

type Props = {|
  +data: BookingListType,
|};

class BookingList extends React.Component<Props> {
  keyExtractor = (item: Object) => item.node.id;
  renderItem = ({ item }: Object) => <Booking data={item.node} />;

  render() {
    const data = this.props.data.edges ?? [];
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          data={data}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
});

export default createFragmentContainer(
  BookingList,
  graphql`
    fragment BookingList on CustomerBookingConnection {
      edges {
        node {
          id(opaque: false)
          ...Booking
        }
      }
    }
  `,
);
