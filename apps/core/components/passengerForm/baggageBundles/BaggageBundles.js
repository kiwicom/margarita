// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { HeaderWithIcon } from '@kiwicom/margarita-components';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';

import type { BaggageBundles_itinerary as BaggageBundlesType } from './__generated__/BaggageBundles_itinerary.graphql';
import Header from './Header';
import BaggageBundle from './BaggageBundle';
import type { BaggageBundle_bagOption as BaggageBundleType } from './__generated__/BaggageBundle_bagOption.graphql';

type Props = {|
  +itinerary: ?BaggageBundlesType,
  +onSelectedBaggageBundle: (?BaggageBundleType) => void,
|};

type State = {
  selectedBagOption: number,
};

class BaggageBundles extends React.Component<Props, State> {
  state = {
    selectedBagOption: 0,
  };

  handleToggleCheck = (index: number, bagOption: ?BaggageBundleType) => {
    this.setState({ selectedBagOption: index });
    this.props.onSelectedBaggageBundle(bagOption);
  };

  render() {
    const bagOptions = this.props.itinerary?.holdBagOptions ?? [];
    return (
      <View style={styles.container}>
        <HeaderWithIcon label="Baggage bundles" iconName="baggage-set" />
        <Header text="Checked baggage" />
        {bagOptions.map((bagOption, index) => {
          return (
            <BaggageBundle
              key={index}
              bagIndex={index}
              bagOption={bagOption}
              onToggleCheck={this.handleToggleCheck}
              selected={this.state.selectedBagOption === index}
            />
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: parseFloat(defaultTokens.spaceSmall),
  },
});

export default createFragmentContainer(BaggageBundles, {
  itinerary: graphql`
    fragment BaggageBundles_itinerary on ItineraryInterface {
      holdBagOptions {
        ...BaggageBundle_bagOption
      }
    }
  `,
});
