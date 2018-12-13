// @flow

import * as React from 'react';
import { View } from 'react-native';
import { QueryRenderer, graphql } from '@kiwicom/margarita-relay';
import { StyleSheet, Text } from '@kiwicom/universal-components';

import type { ResultsList as ResultsListType } from './__generated__/ResultsList.graphql';
import ResultsList from './ResultsList';

type Props = {|
  +travelFrom: string,
  +travelTo: string,
  +dateFrom: string,
  +dateTo: string,
|};

type ResultsType = {|
  +searchItineraries: ResultsListType,
|};

export default class Results extends React.Component<Props> {
  renderInner = (props: ResultsType) => {
    const { searchItineraries } = props;
    return <ResultsList data={searchItineraries} />;
  };

  render() {
    const { travelFrom, travelTo, dateFrom, dateTo } = this.props;
    return (
      <View style={styles.container}>
        <Text>{`Search params: ${travelFrom} -> ${
          travelTo ? travelTo : 'anywhere'
        } | ${dateFrom} -> ${dateTo ? dateTo : 'anytime'}`}</Text>
        <QueryRenderer
          query={graphql`
            query ResultsQuery($input: ItinerariesSearchInput!) {
              searchItineraries(input: $input) {
                ...ResultsList
              }
            }
          `}
          variables={{
            input: {
              travelFrom,
              travelTo,
              dateFrom,
              dateTo,
            },
          }}
          render={this.renderInner}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
