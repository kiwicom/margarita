// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Icon } from '@kiwicom/universal-components';
import type { IconNameType } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Text from '../../text/Text';
import { bags, type BagTitleType } from './BagTypes';

type Props = {|
  +type: BagTitleType,
  +dimensions: string,
  +quantity: number,
  +chosen: boolean,
  +weight: string,
|};

function getIcon(type, quantity): IconNameType {
  if (quantity === 0) {
    if (type === bags.PERSONAL_ITEM) return 'baggage-personal-item'; // @TODO add "no personal item icon"
    if (type === bags.CHECKED_BAG) return 'close';
  }
  switch (type) {
    case bags.PERSONAL_ITEM:
      return 'baggage-personal-item';
    case bags.CABIN_BAG:
      return 'baggage-cabin';
    default:
      return 'baggage-cabin';
  }
}

const BagIcon = ({ type, quantity, chosen }) => {
  let color = defaultTokens.colorIconAttention;
  if (quantity === 0) {
    if (chosen && type === bags.PERSONAL_ITEM) {
      color = defaultTokens.colorIconWarning;
    } else if (!chosen) {
      color = defaultTokens.colorIconSecondary;
    }
  }
  return <Icon name={getIcon(type, quantity)} color={color} />;
};

const BagTitle = ({ quantity, type, chosen, weight }) => {
  let text = type;
  let textType = 'primary';
  if (type === bags.CHECKED_BAG) {
    text = `${weight} ${type.toLowerCase()}`;
  }
  if (quantity === 0) {
    if (chosen && type === bags.PERSONAL_ITEM) {
      textType = 'warning';
    } else if (!chosen) {
      textType = 'secondary';
    }
    if (type === bags.PERSONAL_ITEM) text = 'No personal item';
    if (type === bags.CHECKED_BAG) text = 'No checked baggage';
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
  chosen,
  weight,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={[styles.row, quantity === 0 && styles.paddingRow]}>
        <View style={styles.iconWrapper}>
          <BagIcon chosen={chosen} type={type} quantity={quantity} />
        </View>
        <BagTitle
          quantity={quantity}
          type={type}
          chosen={chosen}
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
