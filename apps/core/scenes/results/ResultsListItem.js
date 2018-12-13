// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { Text, StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { ResultsListItem as ResultsListItemType } from './__generated__/ResultsListItem.graphql';

type Props = {|
  +data: ResultsListItemType,
|};

const ResultListItem = (props: Props) => {
  if (props.data == null) {
    return null;
  }
  const { flyFrom, flyTo, localDeparture, localArrival, price } = props.data;
  /**
   * TODO: properly handle possible undefined props in final version of list
   * (for example: should be entry with undefined price still displayed?)
   *
   * NOTE: ugly form of string creation below is used for now because
   * using ?? inside template literals caused problems with code styling
   * inside VS Code (this part will be probably completely replaced
   * in next iteration, so it's temporary solution)
   */
  const itemString =
    (flyFrom ?? 'Unknown destination') +
    ' / ' +
    (localDeparture ?? 'Unknown departure') +
    ' -> ' +
    (flyTo ?? 'Unknown destination') +
    ' / ' +
    (localArrival ?? 'Unknown arrival') +
    ' | ' +
    (price ?? 'Unknown price');
  return <Text style={styles.listItem}>{itemString}</Text>;
};

const styles = StyleSheet.create({
  listItem: {
    fontSize: 12,
    padding: 2,
    margin: 2,
    backgroundColor: defaultTokens.backgroundBody,
  },
});

export default createFragmentContainer(
  ResultListItem,
  graphql`
    fragment ResultsListItem on Itinerary {
      price
      flyFrom
      flyTo
      localDeparture
      localArrival
    }
  `,
);
