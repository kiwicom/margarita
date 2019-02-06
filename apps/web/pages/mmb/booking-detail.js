// @flow

import * as React from 'react';
import { BookingDetail } from '@kiwicom/margarita-core';
import { withRouter, type Router } from 'next/router';
import { StyleSheet } from '@kiwicom/universal-components';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Layout from '../../components/Layout';

type Props = {|
  +router: Router,
|};

const BookingDetailScreen = (props: Props) => (
  <Layout>
    <View style={styles.wrapper}>
      <BookingDetail bookingId={props.router.query.id} />
    </View>
  </Layout>
);

const styles = StyleSheet.create({
  wrapper: {
    marginTop: defaultTokens.spaceXSmall,
    marginHorizontal: '25%',
  },
});

export default withRouter<Props>(BookingDetailScreen);
