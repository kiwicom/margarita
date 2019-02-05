// @flow

import * as React from 'react';
import { Image, View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';
import { Touchable, StyleSheet } from '@kiwicom/universal-components';
import {
  withNavigation,
  type Navigation,
  Routes,
} from '@kiwicom/margarita-navigation';

import type { Booking as BookingType } from './__generated__/Booking.graphql';
import BookingBadges from './BookingBadges';

type Props = {|
  +data: BookingType,
  +navigation: Navigation,
|};

class Booking extends React.Component<Props> {
  onPress = () => {
    this.props.navigation.navigate(Routes.BOOKING_DETAIL, {
      id: this.props.data.relayId,
    });
  };

  render() {
    const image = { uri: this.props.data.destinationImageUrl ?? '' };
    return (
      <Touchable onPress={this.onPress}>
        <View style={styles.container}>
          <Image source={image} style={styles.image} resizeMode="stretch" />
          <View style={styles.bookingBadgesWrapper}>
            <BookingBadges data={this.props.data} />
          </View>
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 152,
    width: '100%',
    justifyContent: 'space-between',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
    web: {
      marginStart: '25%',
      width: '50%',
    },
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
  bookingBadgesWrapper: {
    position: 'absolute',
    top: 12,
    left: 12,
    right: 12,
  },
});

export default createFragmentContainer(
  withNavigation(Booking),
  graphql`
    fragment Booking on CustomerBooking {
      ...BookingBadges
      destinationImageUrl(dimensions: _1200x628)
      relayId: id
    }
  `,
);
