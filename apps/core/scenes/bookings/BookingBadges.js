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
import { capitalize } from '@kiwicom/margarita-utils';

import type { BookingBadges_data as BookingType } from './__generated__/BookingBadges_data.graphql';

type Props = {|
  +data: BookingType,
|};

const getStatusStyle = (status: ?string) => {
  switch (status) {
    case 'confirmed':
      return styles.confirmed;
    case 'closed':
      return styles.closed;
    case 'refunded':
      return styles.refunded;
    default:
      return null;
  }
};

const BookingBadges = (props: Props) => {
  const statusStyle = getStatusStyle(props.data.status);
  return (
    <View style={styles.container}>
      <AdaptableBadge
        text={
          <Text size="small" type="white">
            {capitalize(props.data.status)}
          </Text>
        }
        style={[statusStyle, styles.badge]}
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
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  confirmed: {
    backgroundColor: defaultTokens.backgroundButtonSuccess,
  },
  closed: {
    backgroundColor: defaultTokens.paletteRedNormal,
  },
  refunded: {
    backgroundColor: defaultTokens.paletteOrangeNormal,
  },
  id: {
    backgroundColor: defaultTokens.paletteInkDark,
  },
  badge: {
    opacity: 0.9,
  },
});

export default createFragmentContainer(BookingBadges, {
  data: graphql`
    fragment BookingBadges_data on BookingInterface {
      id(opaque: false)
      status
    }
  `,
});
