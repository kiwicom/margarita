// @flow

import * as React from 'react';
import { View } from 'react-native';
import { ResultDetail } from '@kiwicom/margarita-core';
import { StyleSheet } from '@kiwicom/universal-components';

import { withPageRouter } from '../components/withPageRouter';
import Layout from '../components/Layout';

const resultDetail = ({ router }) => {
  return (
    <Layout>
      <View style={styles.container}>
        <ResultDetail {...router.query} />
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
