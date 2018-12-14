// @flow

import * as React from 'react';
import { View } from 'react-native';
import { QueryRenderer, graphql } from '@kiwicom/margarita-relay';
import { StyleSheet, Text, Button } from '@kiwicom/universal-components';
import { Routes } from '@kiwicom/margarita-navigation';

import { type SearchQueryResponse } from './__generated__/SearchQuery.graphql';

type Props = Object;

export default class Search extends React.Component<Props> {
  goToResults = () => {
    this.props.navigation.navigate(Routes.RESULTS);
  };

  goToPlacePicker = () => {
    this.props.navigation.navigate(Routes.PLACE_PICKER);
  };

  renderInner = (props: SearchQueryResponse) => {
    const { id, hello } = props;
    return (
      <View style={styles.container}>
        {hello && (
          <Text>
            {hello} ({id})
          </Text>
        )}
        <Button title="PlacePicker" onPress={this.goToPlacePicker} />
        <Button title="Search" onPress={this.goToResults} />
      </View>
    );
  };

  render() {
    return (
      <QueryRenderer
        query={graphql`
          query SearchQuery {
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
