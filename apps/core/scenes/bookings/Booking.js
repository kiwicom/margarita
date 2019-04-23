// @flow

import * as React from 'react';
import { Image, View, Platform } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';
import {
  Touchable,
  StyleSheet,
  TouchableWithoutFeedback,
} from '@kiwicom/universal-components';
import {
  withNavigation,
  type Navigation,
  Routes,
} from '@kiwicom/margarita-navigation';
import { BlackToAlpha } from '@kiwicom/margarita-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { Booking_data as BookingType } from './__generated__/Booking_data.graphql';
import BookingBadges from './BookingBadges';
import FromTo from '../../components/fromTo/FromTo';
import DateAndPassengerCount from './DateAndPassengerCount';

type Props = {|
  +data: BookingType,
  +navigation: Navigation,
|};

type TouchWrapperProps = {|
  +children: React.Node,
  +onPress: () => void,
|};

const TouchWrapper = (props: TouchWrapperProps) => {
  // We are not able to style Touchable properly for web, since it does not apply style prop to parent element
  return Platform.OS === 'web' ? (
    <TouchableWithoutFeedback {...props} />
  ) : (
    <Touchable {...props} delayPressIn={40} />
  );
};

class Booking extends React.Component<Props> {
  onPress = () => {
    this.props.navigation.navigate(Routes.BOOKING_DETAIL, {
      id: this.props.data.relayId,
    });
  };

  render() {
    const image = { uri: this.props.data.destinationImageUrl ?? '' };
    return (
      <TouchWrapper onPress={this.onPress}>
        <View style={styles.container}>
          <Image source={image} style={styles.image} resizeMode="cover" />
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
      </TouchWrapper>
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
      width: '30%',
      minWidth: 250,
      marginEnd: parseInt(defaultTokens.spaceMedium, 10),
      justifyContent: 'flex-start',
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

export default createFragmentContainer(withNavigation(Booking), {
  data: graphql`
    fragment Booking_data on BookingInterface {
      destinationImageUrl(dimensions: _1200x628)
      relayId: id
      ...BookingBadges_data
      ...FromTo_data
      ...DateAndPassengerCount_data
    }
  `,
});
