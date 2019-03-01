// @flow

import * as React from 'react';
import { Text, Icon, StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { View } from 'react-native';

import type { Bag_data as BagType } from './__generated__/Bag_data.graphql';

type Props = {|
  +data: ?BagType,
|};

const getBagType = (quantity: number, type: string): string => {
  let bagType = '';
  const CABIN_BAG = 'Cabin bag';
  const PERSONAL_ITEM = 'Personal item';
  const CHECKED_BAGGAGE = 'Checked baggage';
  switch (type) {
    case 'CABIN_BAG':
      bagType = CABIN_BAG;
      break;
    case 'PERSONAL_ITEM':
      bagType = PERSONAL_ITEM;
      break;
    case 'CHECKED_BAGGAGE':
      bagType = CHECKED_BAGGAGE;
      break;
    default:
      break;
  }
  const plural = quantity > 1 && bagType !== CHECKED_BAGGAGE ? 's' : '';
  return `${quantity} ${bagType}${plural}`;
};

export const Bag = (props: Props) => {
  const quantity = props.data?.quantity ?? 0;
  const type = props.data?.type ?? '';
  return (
    <>
      {quantity > 0 && (
        <View style={styles.container}>
          <Icon
            name="baggage-checked"
            size="small"
            color={defaultTokens.colorIconSecondary}
          />
          <Text type="primary" size="small">
            {getBagType(quantity, type)}
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: parseInt(defaultTokens.spaceXXSmall, 10),
  },
});

export default createFragmentContainer(Bag, {
  data: graphql`
    fragment Bag_data on Bag {
      type
      quantity
    }
  `,
});
