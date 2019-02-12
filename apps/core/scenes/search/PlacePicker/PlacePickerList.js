// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import { type Location } from '../SearchContext';
import PlaceItem from './PlaceItem';
import type { PlacePickerList_locations as PlacePickerListTypes } from './__generated__/PlacePickerList_locations.graphql';

type Props = {|
  +locations: ?PlacePickerListTypes,
  +onPressItem: Location => void,
|};

const PlacePickerList = (props: Props) => {
  const locations = props.locations?.edges || [];
  return (
    <ScrollView style={styles.container}>
      {locations.map(location => (
        <PlaceItem
          key={location?.node?.id}
          item={location?.node}
          onPress={props.onPressItem}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginStart: 25,
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
