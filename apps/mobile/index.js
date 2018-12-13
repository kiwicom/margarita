// @flow

import React from 'react';
import * as Expo from 'expo';
import { Buffer } from 'buffer';
import Roboto from '@kiwicom/universal-components/lib/fonts/Roboto/Roboto-Regular.ttf';
import OrbitIcons from '@kiwicom/universal-components/lib/fonts/orbit-icons.ttf';

import SharedApp from './App';

type Props = {||};
type State = {|
  fontsLoaded: boolean,
|};

global.Buffer = Buffer; // No global Buffer in react-native, and graphql-relay needs it

class App extends React.Component<Props, State> {
  state = {
    fontsLoaded: false,
  };

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: Roboto,
      'orbit-icons': OrbitIcons,
    });
    this.setState({ fontsLoaded: true });
  }

  render() {
    if (this.state.fontsLoaded) {
      return <SharedApp />;
    }
    return null; // TODO: create some loading screen
  }
}

export default App;

Expo.registerRootComponent(App);
