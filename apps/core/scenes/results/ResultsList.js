// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { FlatList, View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { StyleSheet } from '@kiwicom/universal-components';

import type { ResultsList as ResultsListType } from './__generated__/ResultsList.graphql';
import type { ResultsListItem as ResultsListItemType } from './__generated__/ResultsListItem.graphql';
import ResultListItem from './ResultsListItem';
import EmptyResults from './EmptyResults';

type Props = {|
  +data: ResultsListType,
|};

type ItemType = {|
  +node?: {|
    +id: string,
  |},
|};

type ResultItemType = {|
  +item: {|
    +node?: ResultsListItemType,
  |},
|};

class ResultsList extends React.Component<Props> {
  resultItem = ({ item }: ResultItemType) => {
    if (item.node) {
      return <ResultListItem data={item.node} />;
    }
    return null;
  };

  keyExtractor = (item: ItemType) => item.node?.id;

  render() {
    const data = this.props.data.edges ?? [];
    if (data.length === 0) {
      return <EmptyResults />;
    }
    return (
      <View style={styles.cardList}>
        <FlatList
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.resultItem}
        />
      </View>
    );
  }
}

export default createFragmentContainer(
  ResultsList,
  graphql`
    fragment ResultsList on ItineraryConnection {
      edges {
        node {
          id
          ...ResultsListItem
        }
      }
    }
  `,
);

const styles = StyleSheet.create({
  cardList: {
    backgroundColor: defaultTokens.backgroundBody,
    flex: 1,
  },
});
