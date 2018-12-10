// @flow

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { QueryRenderer, graphql } from '@kiwicom/margarita-relay';
import { Text } from '@kiwicom/margarita-components';

import type { AppQueryResponse } from './__generated__/AppQuery.graphql';

type Props = Object;

export default class App extends React.Component<Props> {
  renderInner = (props: AppQueryResponse) => {
    const { id, hello } = props;
    return (
      <View style={styles.container}>
        {hello && (
          <Text>
            {hello} ({id})
          </Text>
        )}
      </View>
    );
  };

  render() {
    return (
      <QueryRenderer
        query={graphql`
          query AppQuery {
            id
            hello
          }
        `}
        render={this.renderInner}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
});
