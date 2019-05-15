// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Button, StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Text from '../text/Text';
import type { Props, State } from './PassengersInputsTypes';
import PassengersInputsLine from './PassengersInputsLine';
import {
  updateAdults,
  updateInfants,
  getMaxAdults,
  getMaxInfants,
} from './PassengersInputsHelpers';

class PassengersInputs extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    /**
     * NOTE: Component is uncontrolled because parent form state should be updated
     * only after change is confirmed by the save button
     */
    const { infants, adults } = this.props;
    this.state = {
      adults,
      infants,
    };
  }

  handleChangeAdults = (value: number) => {
    this.setState(prevState => updateAdults(prevState, value));
  };

  handleChangeInfants = (value: number) => {
    this.setState(prevState => updateInfants(prevState, value));
  };

  handleSavePress = () => {
    this.props.onSavePress({ ...this.state });
  };

  render() {
    const { adults, infants } = this.state;
    const { onClosePress } = this.props;
    return (
      <View>
        <Text weight="bold" size="large" style={styles.sectionLabel}>
          Passenger
        </Text>
        <PassengersInputsLine
          icon="passenger"
          label="Adults"
          value={adults}
          min={1}
          max={getMaxAdults(this.state)}
          onChange={this.handleChangeAdults}
          underline
        />
        <PassengersInputsLine
          icon="child-friendly"
          label="Infants"
          value={infants}
          min={0}
          max={getMaxInfants(this.state)}
          onChange={this.handleChangeInfants}
        />
        <View style={styles.bottomButtons}>
          <View style={styles.buttonWrapper}>
            <Button onPress={onClosePress} type="secondary" label="Close" />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              onPress={this.handleSavePress}
              type="primary"
              label="Save"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionLabel: {
    color: defaultTokens.colorTextAttention,
    marginTop: parseInt(defaultTokens.spaceLarge, 10),
    marginBottom: parseInt(defaultTokens.spaceSmall, 10),
    paddingHorizontal: parseInt(defaultTokens.spaceMedium, 10),
  },
  bottomButtons: {
    flexDirection: 'row',
    marginTop: parseInt(defaultTokens.spaceMedium, 10),
    margin: parseInt(defaultTokens.spaceXXSmall, 10),
  },
  buttonWrapper: {
    flex: 1,
    margin: parseInt(defaultTokens.spaceXXSmall, 10),
  },
});

export default PassengersInputs;
