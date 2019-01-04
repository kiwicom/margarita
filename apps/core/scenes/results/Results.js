// @flow

import * as React from 'react';
import { View } from 'react-native';
import { QueryRenderer, graphql } from '@kiwicom/margarita-relay';
import { StyleSheet, Text } from '@kiwicom/universal-components';
import { DateTime } from 'luxon';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

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

  // @TODO: separate to Frame component in universal components
  renderFrame = () => {
    const { dateFrom } = this.props;
    return (
      <Text style={styles.frameText}>
        {DateTime.fromISO(dateFrom).toFormat('cccc d LLLL')}
      </Text>
    );
  };

  render() {
    const { travelFrom, travelTo, dateFrom, dateTo } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>{this.renderFrame()}</View>
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
  headerContainer: {
    paddingHorizontal: 25,
    paddingBottom: 10,
    backgroundColor: defaultTokens.backgroundCard,
    borderColor: defaultTokens.borderColorCard,
    borderBottomWidth: 1,
  },
  frameText: {
    padding: 3,
    backgroundColor: defaultTokens.backgroundButtonSecondary,
    borderRadius: parseFloat(defaultTokens.borderRadiusSmall),
    fontSize: parseFloat(defaultTokens.fontSizeTextSmall),
    color: defaultTokens.colorTextPrimary,
    alignSelf: 'center',
  },
});
