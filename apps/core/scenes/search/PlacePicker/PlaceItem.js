// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Text,
  StyleSheet,
  Icon,
  Touchable,
} from '@kiwicom/universal-components';

import { type Location } from '../SearchContext';

type Props = {|
  +onPress: Location => void,
  +location: ?Location,
|};

class PlaceItem extends React.Component<Props> {
  handlePress = () => {
    const { location, onPress } = this.props;
    location && onPress(location); // eslint-disable-line babel/no-unused-expressions
  };

  render() {
    const { location } = this.props;
    if (!location || !location.locationId || !location.name) {
      // eslint-disable-next-line no-console
      console.error('Incomplete data for the location!');
      return null;
    }
    return (
      <Touchable onPress={this.handlePress}>
        <View style={styles.container}>
          <Icon name="location" />
          <Text style={styles.text}>{location.name}</Text>
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    paddingVertical: 10,
  },
});

export default PlaceItem;
