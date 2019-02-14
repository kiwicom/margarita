// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Search, SearchContextProvider } from '@kiwicom/margarita-core';
import { StyleSheet } from '@kiwicom/universal-components';

import Layout from '../components/Layout';

export default function IndexPage() {
  return (
    <Layout>
      <View style={styles.page}>
        <SearchContextProvider>
          <Search />
        </SearchContextProvider>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
