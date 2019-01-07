// @flow

/* eslint-disable no-restricted-imports */
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Loader } from '@kiwicom/universal-components';
import {
  QueryRenderer,
  type ReadyState,
  type GraphQLTaggedNode,
} from 'react-relay';

import environment from './Environment';

type Props = {|
  +render: (props: Object) => React.Element<any>,
  +query: GraphQLTaggedNode,
  +variables?: Object,
|};

export default class App extends React.Component<Props> {
  renderRelayContainer = ({ error, props }: ReadyState) => {
    if (error) {
      return (
        <View>
          <Text style={styles.text}>{error.message}</Text>
        </View>
      );
    }
    if (!props) {
      return (
        <View style={styles.container}>
          <Loader size="large" />
        </View>
      );
    }
    return this.props.render(props);
  };

  render() {
    return (
      <QueryRenderer
        variables={this.props.variables}
        environment={environment}
        query={this.props.query}
        render={this.renderRelayContainer}
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
  text: {
    alignItems: 'center',
    fontSize: 24,
  },
});
