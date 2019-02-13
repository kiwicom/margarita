// @flow

import * as React from 'react';
import { View, FlatList } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import PlaceItem from './PlaceItem';
import type { PlacePickerList_locations as PlacePickerListTypes } from './__generated__/PlacePickerList_locations.graphql';

type Props = {|
  +locations: ?PlacePickerListTypes,
|};
const resultItem = ({ item }) => {
  if (item.node) {
    return <PlaceItem item={item?.node} textContainerStyle={styles.item} />;
  }
  return null;
};

const keyExtractor = item => item?.node?.id;

const PlacePickerList = (props: Props) => {
  const locations = props.locations?.edges || [];
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.container}
        data={locations}
        keyExtractor={keyExtractor}
        renderItem={resultItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: parseFloat(defaultTokens.borderWidthCard),
    borderBottomColor: defaultTokens.borderColorCard,
  },
});

export default createFragmentContainer(
  PlacePickerList,
  graphql`
    fragment PlacePickerList_locations on LocationConnection {
      edges {
        node {
          id
          ...PlaceItem_item
        }
      }
    }
  `,
);
