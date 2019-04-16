// @flow

import * as React from 'react';
import { View } from 'react-native';
import { ResultDetail } from '@kiwicom/margarita-core';
import { StyleSheet } from '@kiwicom/universal-components';

import { withPageRouter } from '../components/withPageRouter';
import Layout from '../components/Layout';

const resultDetail = ({ router }) => {
  const { bookingToken, adults, infants } = router.query;
  const params = {
    bookingToken,
    adults: parseInt(adults ?? 1, 10),
    infants: parseInt(infants ?? 0, 10),
  };
  return (
    <Layout>
      <View style={styles.container}>
        <ResultDetail {...params} />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default withPageRouter<React.Element<any>>(resultDetail);
