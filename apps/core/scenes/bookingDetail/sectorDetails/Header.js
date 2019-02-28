// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Text, StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import type { Header_data as BookingType } from './__generated__/Header_data.graphql';

type Props = {|
  +data: ?BookingType,
|};

const Header = (props: Props) => {
  const bookingId = props.data?.bookingId ?? '';
  return (
    <View style={[styles.row, styles.container]}>
      <View style={styles.row}>
        <View style={styles.circle} />
        <Text type="success" size="small">
          {props.data?.status}
        </Text>
      </View>
      <Text type="secondary" size="small">
        {`#${bookingId}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  circle: {
    backgroundColor: defaultTokens.colorTextSuccess,
    width: 10,
    height: 10,
    borderRadius: 5,
    marginEnd: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default createFragmentContainer(Header, {
  data: graphql`
    fragment Header_data on BookingInterface {
      bookingId: id(opaque: false)
      status
    }
  `,
});
