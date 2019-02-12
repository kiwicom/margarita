// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Text,
  StyleSheet,
  Icon,
  Touchable,
} from '@kiwicom/universal-components';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import { type Location } from '../SearchContext';
import type { PlaceItem_item as PlaceItemType } from './__generated__/PlaceItem_item.graphql';

type Props = {|
  +onPress: Location => void,
  +item: ?PlaceItemType,
|};

class PlaceItem extends React.Component<Props> {
  handlePress = () => {
    const { item, onPress } = this.props;
    onPress({
      id: item?.id,
      locationId: item?.locationId,
      name: item?.name,
    });
  };

  render() {
    const { item } = this.props;

    return (
      <Touchable onPress={this.handlePress}>
        <View style={styles.container}>
          <Icon name="location" />
          <Text style={styles.text}>{item?.name}</Text>
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    paddingVertical: 10,
  },
});

export default createFragmentContainer(
  PlaceItem,
  graphql`
    fragment PlaceItem_item on Location {
      id
      name
      locationId
    }
  `,
);
