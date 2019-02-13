// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Text,
  StyleSheet,
  Icon,
  Touchable,
  type StylePropType,
} from '@kiwicom/universal-components';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { MODAL_TYPE } from '../SearchConstants';
import {
  withSearchContext,
  type SearchContextState,
  type Location,
} from '../SearchContext';
import type { PlaceItem_item as PlaceItemType } from './__generated__/PlaceItem_item.graphql';

type Props = {|
  +item: ?PlaceItemType,
  +modalType: 'DESTINATION' | 'ORIGIN',
  +setTravelTo: Location => void,
  +setTravelFrom: Location => void,
  +setModalType: string => void,
  +textContainerStyle?: StylePropType,
|};

class PlaceItem extends React.Component<Props> {
  handleListItemClick = () => {
    const {
      modalType,
      setTravelFrom,
      setTravelTo,
      setModalType,
      item,
    } = this.props;

    const location = {
      id: item?.id,
      locationId: item?.locationId,
      name: item?.name,
    };

    if (modalType === MODAL_TYPE.ORIGIN) {
      setTravelFrom(location);
    }
    if (modalType === MODAL_TYPE.DESTINATION) {
      setTravelTo(location);
    }
    setModalType(MODAL_TYPE.HIDDEN);
  };

  render() {
    const { item, textContainerStyle } = this.props;

    return (
      <Touchable onPress={this.handleListItemClick}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Icon
              color={defaultTokens.backgroundButtonPrimary}
              name="location"
            />
          </View>
          <View style={[styles.textContainer, textContainerStyle]}>
            <Text>{item?.name}</Text>
          </View>
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  iconContainer: {
    paddingBottom: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 4,
    paddingLeft: 8,
    paddingBottom: 8,
    paddingTop: 24,
  },
});

const select = ({
  modalType,
  actions: { setTravelTo, setTravelFrom, setModalType },
}: SearchContextState) => ({
  setTravelFrom,
  setTravelTo,
  setModalType,
  modalType,
});

export default createFragmentContainer(
  withSearchContext(select)(PlaceItem),
  graphql`
    fragment PlaceItem_item on Location {
      id
      name
      locationId
    }
  `,
);
