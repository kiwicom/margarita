// @flow

/* eslint-disable no-restricted-imports */
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Loader } from '@kiwicom/universal-components';
import { QueryRenderer as KiwiQueryRenderer } from '@kiwicom/relay';
import { type ReadyState, type GraphQLTaggedNode } from 'react-relay';
import { IllustrationWithInformation } from '@kiwicom/margarita-components';

import environment from './Environment';

type Props = {|
  +render: (props: Object) => React.Element<any>,
  +query: GraphQLTaggedNode,
  +variables?: Object,
|};

export default class QueryRenderer extends React.Component<Props> {
  renderRelayContainer = ({ error, props }: ReadyState) => {
    if (error) {
      return (
        <IllustrationWithInformation
          illustrationName="Error"
          text="Something went wrong"
          description={error.message}
        />
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
      <KiwiQueryRenderer
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
});
