// @flow

import React from 'react';
import { View } from 'react-native';
import { StyleSheet, RadioButton } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Text } from '@kiwicom/margarita-components';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';
import { formatPrice } from '@kiwicom/margarita-localization';

import type { BaggageBundle_bagOption as BaggageBundleType } from './__generated__/BaggageBundle_bagOption.graphql';
import BaggageTypeDetail from './BaggageTypeDetail';
import { BAG_TYPE } from './BagTypes';

type Props = {|
  +bagOption: ?BaggageBundleType,
  +bagIndex: number,
  +onToggleCheck: (number, ?BaggageBundleType) => void,
  +selected: boolean,
|};

class BaggageBundle extends React.Component<Props> {
  handleToggleCheck = () => {
    const { bagIndex, onToggleCheck, bagOption } = this.props;
    onToggleCheck(bagIndex, bagOption);
  };

  render() {
    const { selected, bagOption } = this.props;

    if (bagOption == null) {
      return null;
    }

    return (
      <RadioButton
        type="check"
        checked={selected}
        onPress={this.handleToggleCheck}
        style={[styles.container, selected && styles.containerChecked]}
      >
        <View style={styles.row}>
          <BaggageTypeDetail
            selected={selected}
            type={BAG_TYPE.CHECKED_BAG}
            quantity={bagOption.quantity ?? 0}
            dimensions={bagOption.dimensions}
            weight={bagOption.weight}
          />
          {bagOption.price != null && (
            <Text>
              {formatPrice(bagOption.price.amount, bagOption.price.currency)}
            </Text>
          )}
        </View>
      </RadioButton>
    );
  }
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

export default createFragmentContainer(BaggageBundle, {
  bagOption: graphql`
    fragment BaggageBundle_bagOption on HoldBagOption {
      quantity
      dimensions
      weight
      price {
        amount
        currency
      }
    }
  `,
});
