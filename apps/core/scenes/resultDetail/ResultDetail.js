// @flow

import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { withNavigation } from '@kiwicom/margarita-navigation';
import { PassengerCards } from '@kiwicom/margarita-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +detailId: ?string,
|};

class ResultDetail extends React.Component<Props> {
  handlePassengerEditPress = id => {
    if (id) {
      alert(id); // @TODO
    }
  };

  render() {
    const passengerCards = [
      {
        name: 'John Doe',
        gender: 'male',
        nationality: 'Russian',
        dateOfBirth: '22/04/1980',
        id: 'DF45SV8',
        insurance: 'Travel Insurance Name',
        passengerCount: 1,
        bags: [
          { count: 2, type: '40x15x30cm, 3kg' },
          { count: 1, type: '55x20x40cm, 8kg' },
        ],
      },
      {
        name: 'Jana Nováková',
        gender: 'female',
        nationality: 'Czech',
        dateOfBirth: '22/04/1984',
        id: 'DF45SV9',
        insurance: 'Travel Insurance Name',
        passengerCount: 1,
        bags: [{ count: 1, type: '40x15x30cm, 3kg' }],
      },
    ];

    return (
      <View style={styles.container}>
        <ScrollView>
          <PassengerCards
            passengerCards={passengerCards}
            onActionPress={this.handlePassengerEditPress}
            actionIconName="edit"
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
