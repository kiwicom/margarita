// @flow

import React from 'react';
import { View } from 'react-native';
import { StyleSheet, RadioButton } from '@kiwicom/universal-components';
import { Text } from '@kiwicom/margarita-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { type BagTitleType } from './BagTypes';
import BaggageTypeDetail from './BaggageTypeDetail';

type Bag = {|
  +type: BagTitleType,
  +quantity: number,
  +dimensions: string,
  +weight: string,
|};

type Props = {|
  +price: ?string,
  +bags: Array<Bag>,
  +bagIndex: number,
  +onToggleCheck: (BagTitleType, number) => void,
  +type: string,
  +currentlyChosen: number,
|};

export default function BaggageBundle({
  currentlyChosen,
  type,
  bagIndex,
  bags,
  price,
  onToggleCheck,
}: Props) {
  const shouldBeChecked = currentlyChosen === bagIndex;
  function handleToggleCheck() {
    onToggleCheck(type, bagIndex);
  }

  return (
    <View
      style={[styles.container, shouldBeChecked && styles.containerChecked]}
    >
      <View style={styles.row}>
        <RadioButton
          type="check"
          checked={shouldBeChecked}
          onPress={handleToggleCheck}
        />
        <View style={styles.baggageDetails}>
          {bags.map((bag, index) => {
            return (
              <BaggageTypeDetail
                key={index}
                type={bag.type}
                quantity={bag.quantity}
                dimensions={bag.dimensions}
                weight={bag.weight}
                chosen={shouldBeChecked}
              />
            );
          })}
        </View>
      </View>
      <Text>{price}</Text>
    </View>
  );
}

const borderWidth = 0.5;
const checkedBorderWidth = 2;
const borderWidthDiff = checkedBorderWidth - borderWidth;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: parseFloat(defaultTokens.spaceXSmall),
    marginTop: parseFloat(defaultTokens.spaceSmall),
    marginHorizontal: parseFloat(defaultTokens.spaceSmall),
    marginBottom: parseFloat(defaultTokens.spaceXXXSmall),
    borderWidth,
    borderStyle: 'solid',
    borderColor: defaultTokens.borderColorTableCell,
    borderRadius: 4,
    shadowColor: defaultTokens.paletteInkDark,
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  row: {
    flexDirection: 'row',
  },
  containerChecked: {
    borderColor: defaultTokens.borderColorButtonPrimaryBordered,
    borderWidth: checkedBorderWidth,
    marginTop: parseFloat(defaultTokens.spaceSmall) - borderWidthDiff,
    marginHorizontal: parseFloat(defaultTokens.spaceSmall) - borderWidthDiff,
    marginBottom: parseFloat(defaultTokens.spaceXXXSmall) - borderWidthDiff,
  },
});
