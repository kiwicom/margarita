// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { FlatList, View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { StyleSheet } from '@kiwicom/universal-components';
import {
  withNavigation,
  Routes,
  type Navigation,
} from '@kiwicom/margarita-navigation';

import { ItineraryCard } from '../../components/ItineraryCard';
import type { ResultsList_data as ResultsListType } from './__generated__/ResultsList_data.graphql';
import EmptyResults from './EmptyResults';

type Props = {|
  +data: ?ResultsListType,
  +navigation: Navigation,
|};

type ResultItemType = {|
  +node?: {|
    +id: string,
    +$fragmentRefs: any,
  |},
  +$refType: any,
|};

class ResultsList extends React.Component<Props> {
  onBookPress = detailId => {
    this.props.navigation.navigate(Routes.RESULT_DETAIL, {
      detailId,
    });
  };

  resultItem = ({ item }: {| +item: ResultItemType |}) => {
    if (item.node) {
      return <ItineraryCard data={item.node} onBookPress={this.onBookPress} />;
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
      <View style={styles.cardList}>
        <FlatList
          contentContainerStyle={styles.container}
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.resultItem}
        />
      </View>
    );
  }
}

export default createFragmentContainer(withNavigation(ResultsList), {
  data: graphql`
    fragment ResultsList_data on ItineraryConnection {
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
  cardList: {
    backgroundColor: defaultTokens.backgroundBody,
    flex: 1,
  },
  container: {
    web: {
      paddingTop: parseInt(defaultTokens.spaceMedium, 10),
      paddingHorizontal: parseInt(defaultTokens.spaceSmall, 10),
    },
  },
});
