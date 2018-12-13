// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, TextInput, Button } from '@kiwicom/universal-components';

import Routes from '../../config/routes';

type Props = Object;
type State = {|
  travelFrom: string,
  travelTo: string,
  dateFrom: string,
  dateTo: string,
|};

export default class Search extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      travelFrom: 'OSL',
      travelTo: 'PRG',
      dateFrom: '2018-12-30',
      dateTo: '2018-12-31',
    };
  }

  handleTravelFromChange = (value: string) =>
    this.setState({ travelFrom: value });

  handleTravelToChange = (value: string) => this.setState({ travelTo: value });
  handleDateFromChange = (value: string) => this.setState({ dateFrom: value });
  handleDateToChange = (value: string) => this.setState({ dateTo: value });
  handleSubmitPress = () => {
    const { travelFrom, travelTo, dateFrom, dateTo } = this.state;
    this.props.navigation.navigate(Routes.RESULTS, {
      travelFrom,
      travelTo,
      dateFrom,
      dateTo,
    });
  };

  goToPlacePicker = () => {
    this.props.navigation.navigate(Routes.PLACE_PICKER);
  };

  render() {
    return (
      <View style={styles.formWrapper}>
        <TextInput
          style={styles.input}
          onChangeText={this.handleTravelFromChange}
          value={this.state.travelFrom}
        />
        <TextInput
          style={styles.input}
          onChangeText={this.handleTravelToChange}
          value={this.state.travelTo}
        />
        <TextInput
          style={styles.input}
          onChangeText={this.handleDateFromChange}
          value={this.state.dateFrom}
        />
        <TextInput
          style={styles.input}
          onChangeText={this.handleDateToChange}
          value={this.state.dateTo}
        />
        <Button onPress={this.handleSubmitPress}>Search</Button>
        <Button onPress={this.goToPlacePicker}>PlacePicker</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formWrapper: {
    maxWidth: 500,
  },
  input: {
    borderWidth: 1,
    borderColor: '#bbbbbb',
    margin: 5,
    padding: 5,
  },
});
