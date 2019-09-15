// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Loader, StyleSheet, Text } from '@kiwicom/universal-components';
import {
  QueryRenderer as KiwiQueryRenderer,
  type GraphQLTaggedNode,
} from '@kiwicom/relay';
import { IllustrationWithInformation } from '@kiwicom/margarita-components';

import environment from './Environment';

type Props = {|
  +render: (props: Object) => React.Element<any>,
  +query: GraphQLTaggedNode,
  +loaderText?: string,
  +variables?: Object,
|};

export default class QueryRenderer extends React.Component<Props> {
  onSystemError = ({ error }: { error: Error, retry: ?() => void }) => {
    return (
      <View style={styles.unloadedContainer}>
        <IllustrationWithInformation
          illustrationName="Error"
          text="Something went wrong"
          description={error.message}
        />
      </View>
    );
  };

  onLoading = () => {
    return (
      <View style={styles.unloadedContainer}>
        <Loader size="large" />
        {this.props.loaderText != null && (
          <View style={styles.loaderTextContainer}>
            <Text style={styles.loaderText}>{this.props.loaderText}</Text>
          </View>
        )}
      </View>
    );
  };

  render() {
    return (
      <KiwiQueryRenderer
        variables={this.props.variables}
        environment={environment}
        query={this.props.query}
        onResponse={this.props.render}
        onSystemError={this.onSystemError}
        onLoading={this.onLoading}
      />
    );
  }
}

const styles = StyleSheet.create({
  unloadedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    flexGrow: 1,
  },
  loaderTextContainer: {
    paddingTop: 10,
  },
  loaderText: { color: '#aaa' },
});
