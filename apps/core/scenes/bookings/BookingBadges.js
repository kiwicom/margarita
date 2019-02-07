// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  AdaptableBadge,
  StyleSheet,
  Text,
} from '@kiwicom/universal-components';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { BookingBadges as BookingType } from './__generated__/BookingBadges.graphql';

type Props = {|
  +data: BookingType,
|};

const BookingBadges = (props: Props) => (
  <View style={styles.container}>
    <AdaptableBadge
      text={
        <Text size="small" type="white">
          {props.data.status}
        </Text>
      }
      style={[styles.status, styles.badge]}
    />
    <AdaptableBadge
      text={
        <Text size="small" type="white">
          {props.data.id}
        </Text>
      }
      style={[styles.id, styles.badge]}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  status: {
    backgroundColor: defaultTokens.backgroundButtonSuccess,
  },
  id: {
    backgroundColor: defaultTokens.paletteInkDark,
  },
  badge: {
    opacity: 0.9,
  },
});

export default createFragmentContainer(
  BookingBadges,
  graphql`
    fragment BookingBadges on BookingInterface {
      id(opaque: false)
      status
    }
  `,
);
