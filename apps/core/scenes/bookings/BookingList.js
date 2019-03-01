// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';
import { ScrollView, View } from 'react-native';
import { StyleSheet, Text } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { BookingList_data as BookingListType } from './__generated__/BookingList_data.graphql';
import Booking from './Booking';

type Props = {|
  +data: ?BookingListType,
|};

const BookingList = (props: Props) => {
  const data = props.data?.edges ?? [];
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Upcoming trips</Text>
        <View style={styles.inner}>
          {data.map(item => (
            <Booking data={item?.node} key={item?.node?.id} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
  scrollView: {
    paddingTop: 15,
    web: {
      paddingHorizontal: parseInt(defaultTokens.spaceLarge, 10),
    },
  },
  inner: {
    web: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  },
  title: {
    marginStart: 8,
    marginBottom: 8,
  },
});

export default createFragmentContainer(BookingList, {
  data: graphql`
    fragment BookingList_data on BookingInterfaceConnection {
      edges {
        node {
          id(opaque: false)
          ...Booking_data
        }
      }
    }
  `,
});
