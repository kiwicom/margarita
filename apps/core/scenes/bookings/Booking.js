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
import { BlackToAlpha } from '@kiwicom/margarita-components';

import type { Booking as BookingType } from './__generated__/Booking.graphql';
import BookingBadges from './BookingBadges';
import FromTo from './FromTo';
import DateAndPassengerCount from './DateAndPassengerCount';

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
          <Image
            source={BlackToAlpha}
            style={styles.stretchedImage}
            resizeMode="stretch"
          />
          <View style={[styles.absoluteWrappers, styles.bookingBadgesWrapper]}>
            <BookingBadges data={this.props.data} />
          </View>
          <View style={[styles.absoluteWrappers, styles.fromToWrapper]}>
            <FromTo data={this.props.data} />
          </View>
          <View style={[styles.absoluteWrappers, styles.dateWrapper]}>
            <DateAndPassengerCount data={this.props.data} />
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
  stretchedImage: {
    position: 'absolute',
    end: 0,
    start: 0,
    bottom: 0,
    width: null,
    height: 80,
  },
  absoluteWrappers: {
    start: 12,
    end: 12,
    position: 'absolute',
  },
  bookingBadgesWrapper: {
    top: 12,
  },
  fromToWrapper: {
    bottom: 30,
  },
  dateWrapper: {
    bottom: 13,
  },
});

export default createFragmentContainer(
  withNavigation(Booking),
  graphql`
    fragment Booking on CustomerBooking {
      destinationImageUrl(dimensions: _1200x628)
      relayId: id
      ...BookingBadges
      ...FromTo
      ...DateAndPassengerCount
    }
  `,
);
