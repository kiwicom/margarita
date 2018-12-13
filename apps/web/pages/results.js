// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Results } from '@kiwicom/margarita-core';
import { withRouter } from 'next/router';
import { StyleSheet } from '@kiwicom/universal-components';

import Layout from '../components/Layout';

const results = ({ router }) => {
  return (
    <Layout>
      <View style={styles.container}>
        <Results {...router.query} />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default withRouter<React.Element<any>>(results);
