// @flow

import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { withNavigation } from '@kiwicom/margarita-navigation';
import { PassengerCard } from '@kiwicom/margarita-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +detailId: ?string,
|};

class ResultDetail extends React.Component<Props> {
  handlePassengerEditPress = () => {
    // @TODO
  };

  render() {
    const name = 'John Doe';
    const gender = 'male';
    const nationality = 'Russian';
    const dateOfBirth = '22/04/1980';
    const id = 'DF45SV9';
    const insurance = 'Travel Insurance Name';
    const passengerCount = 1;
    const bags = [
      { count: 2, type: '40x15x30cm, 3kg' },
      { count: 1, type: '55x20x40cm, 8kg' },
    ];
    return (
      <View style={styles.container}>
        <ScrollView>
          <PassengerCard
            name={name}
            gender={gender}
            nationality={nationality}
            dateOfBirth={dateOfBirth}
            id={id}
            insurance={insurance}
            passengerCount={passengerCount}
            bags={bags}
            actionIconName="edit"
            onActionPress={this.handlePassengerEditPress}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultTokens.backgroundBody,
  },
});

export default withNavigation(ResultDetail);
