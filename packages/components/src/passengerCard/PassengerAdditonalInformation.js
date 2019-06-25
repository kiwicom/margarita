// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Text, StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import BagInformation from './BagInformation';
import PassengerCardDetailItem from './PassengerCardDetailItem';

type BagType = {|
  +quantity: number,
  +dimensions: number,
  +weight: number,
|};

type Props = {|
  +insurance: ?string,
  +bags: ?$ReadOnlyArray<BagType>,
|};

function parseBagType(bag: BagType) {
  return `${bag.dimensions ? `${bag.dimensions},` : ''} ${bag.weight ?? ''}`;
}

const PassengerAdditonalInformation = ({ bags, insurance }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text type="secondary" style={styles.label}>
          Bags
        </Text>
        <View>
          {bags &&
            bags.map((bag, idx) => (
              <BagInformation
                key={idx}
                count={bag.quantity}
                type={parseBagType(bag)}
              />
            ))}
        </View>
      </View>
      {insurance != null && (
        <PassengerCardDetailItem
          value={insurance}
          label="Travel Insurance"
          style="normal"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    height: 120,
  },
  row: {
    flexGrow: 3,
  },
  label: {
    paddingBottom: parseInt(defaultTokens.spaceXSmall, 10),
  },
});

export default PassengerAdditonalInformation;
