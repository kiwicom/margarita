import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Expo from 'expo';
import { Icon } from '@kiwicom/universal-components';
import OrbitIcons from '@kiwicom/universal-components/lib/fonts/orbit-icons.ttf';

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async componentDidMount() {
    await Expo.Font.loadAsync({
      'orbit-icons': OrbitIcons,
    });
    this.setState({ fontsLoaded: true });
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
            <Icon name="airplane" color="#40A798" size="large"/>
            <Text>Open up App.js to start working on your app!</Text>
        </View>
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
