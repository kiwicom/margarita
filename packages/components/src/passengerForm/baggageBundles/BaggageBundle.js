// @flow

import React from 'react';
import { View } from 'react-native';
import { StyleSheet, RadioButton } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Text from '../../text/Text';
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
    <RadioButton
      type="check"
      checked={shouldBeChecked}
      onPress={handleToggleCheck}
      style={[styles.container, shouldBeChecked && styles.containerChecked]}
    >
      <View style={styles.row}>
        <View>
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
        <Text>{price}</Text>
      </View>
    </RadioButton>
  );
}

const borderWidth = 0.5;
const checkedBorderWidth = 2;
const borderWidthDiff = checkedBorderWidth - borderWidth;

const styles = StyleSheet.create({
  container: {
    padding: parseFloat(defaultTokens.spaceXSmall),
    marginTop: parseFloat(defaultTokens.spaceSmall),
    marginBottom: parseFloat(defaultTokens.spaceXXXSmall),
    backgroundColor: defaultTokens.paletteWhite,
    borderWidth,
    borderColor: defaultTokens.borderColorTableCell,
    borderRadius: 4,
    shadowColor: defaultTokens.paletteInkDark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  containerChecked: {
    borderColor: defaultTokens.borderColorButtonPrimaryBordered,
    borderWidth: checkedBorderWidth,
    padding: parseFloat(defaultTokens.spaceXSmall) - borderWidthDiff,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
