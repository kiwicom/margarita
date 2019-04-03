// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Results, SearchContextProvider } from '@kiwicom/margarita-core';
import { StyleSheet } from '@kiwicom/universal-components';

import { withPageRouter } from '../components/withPageRouter';
import Layout from '../components/Layout';

const results = ({ router }) => {
  return (
    <Layout>
      <View style={styles.container}>
        <SearchContextProvider>
          <Results {...router.query} />
        </SearchContextProvider>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default withPageRouter<React.Element<any>>(results);
