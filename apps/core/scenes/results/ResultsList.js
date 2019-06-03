// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { FlatList } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { StyleSheet } from '@kiwicom/universal-components';

import { ItineraryCard } from '../../components/ItineraryCard';
import type { ResultsList_data as ResultsListType } from './__generated__/ResultsList_data.graphql';
import EmptyResults from './EmptyResults';

type Props = {|
  +data: ?ResultsListType,
  +onBookPress: string => void,
|};

type ResultItemType = {|
  +node?: {|
    +id: string,
    +$fragmentRefs: any,
  |},
  +$refType: any,
|};

class ResultsList extends React.Component<Props> {
  resultItem = ({ item }: {| +item: ResultItemType |}) => {
    if (item.node) {
      return (
        <ItineraryCard data={item.node} onBookPress={this.props.onBookPress} />
      );
    }
    return null;
  };

  keyExtractor = (item: ResultItemType) => item.node?.id;

  render() {
    const data = this.props.data?.edges ?? [];
    if (data.length === 0) {
      return <EmptyResults />;
    }
    return (
      <FlatList
        contentContainerStyle={styles.container}
        data={data}
        keyExtractor={this.keyExtractor}
        renderItem={this.resultItem}
      />
    );
  }
}

export default createFragmentContainer(ResultsList, {
  data: graphql`
    fragment ResultsList_data on ItineraryInterfaceConnection {
      edges {
        node {
          id
          ...ItineraryCard_data
        }
      }
    }
  `,
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultTokens.backgroundBody,
    paddingTop: parseInt(defaultTokens.spaceXSmall, 10),
    web: {
      paddingTop: parseInt(defaultTokens.spaceMedium, 10),
      paddingHorizontal: parseInt(defaultTokens.spaceSmall, 10),
    },
  },
});
