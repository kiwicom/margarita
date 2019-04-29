// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Icon } from '@kiwicom/universal-components';
import type { IconNameType } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Text } from '@kiwicom/margarita-components';

import { BAG_TYPE, type BagType } from './BagTypes';

type Props = {|
  +selected: boolean,
  +type: BagType,
  +quantity: number,
  +dimensions: ?string,
  +weight: ?string,
|};

function getIcon(type, quantity): IconNameType {
  if (quantity === 0) {
    if (type === BAG_TYPE.PERSONAL_ITEM) return 'baggage-personal-item-none';
    if (type === BAG_TYPE.CHECKED_BAG) return 'close';
  }
  switch (type) {
    case BAG_TYPE.PERSONAL_ITEM:
      return 'baggage-personal-item';
    case BAG_TYPE.CABIN_BAG:
      return 'baggage-cabin';
    default:
      return 'baggage-cabin';
  }
}

const BagIcon = ({ type, quantity, selected }) => {
  let color = defaultTokens.colorIconAttention;
  if (quantity === 0) {
    if (selected && type === BAG_TYPE.PERSONAL_ITEM) {
      color = defaultTokens.colorIconWarning;
    } else if (!selected) {
      color = defaultTokens.colorIconSecondary;
    }
  }
  return <Icon name={getIcon(type, quantity)} color={color} />;
};

const BagTitle = ({ quantity, type, selected, weight }) => {
  let text = type;
  let textType = 'primary';
  if (type === BAG_TYPE.CHECKED_BAG && weight != null) {
    text = `${weight} ${type.toLowerCase()}`;
  }
  if (quantity > 1) {
    text = `${quantity}x ${text}`;
  }
  if (quantity === 0) {
    if (selected && type === BAG_TYPE.PERSONAL_ITEM) {
      textType = 'warning';
    } else if (!selected) {
      textType = 'secondary';
    }
    if (type === BAG_TYPE.PERSONAL_ITEM) text = 'No personal item';
    if (type === BAG_TYPE.CHECKED_BAG) text = 'No checked baggage';
  }
  return (
    <Text type={textType} size="large">
      {text}
    </Text>
  );
};

export default function BaggageTypeDetail({
  type,
  dimensions,
  quantity,
  selected,
  weight,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={[styles.row, quantity === 0 && styles.paddingRow]}>
        <View style={styles.iconWrapper}>
          <BagIcon selected={selected} type={type} quantity={quantity} />
        </View>
        <BagTitle
          quantity={quantity}
          type={type}
          selected={selected}
          weight={weight}
        />
      </View>
      {quantity === 0 || (
        <View style={styles.infoWrapper}>
          <Text type="secondary">{dimensions}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: parseFloat(defaultTokens.spaceXSmall),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paddingRow: {
    paddingBottom: parseFloat(defaultTokens.spaceXSmall),
  },
  iconWrapper: {
    paddingHorizontal: parseFloat(defaultTokens.spaceXSmall),
    width: 40,
  },
  infoWrapper: {
    paddingStart: 40,
    justifyContent: 'space-between',
    paddingBottom: parseFloat(defaultTokens.spaceXSmall),
  },
});
