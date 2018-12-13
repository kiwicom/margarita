// @flow

import React from 'react';
import * as Expo from 'expo';
import { Buffer } from 'buffer';
import Roboto from '@kiwicom/universal-components/lib/fonts/Roboto/Roboto-Regular.ttf';
import OrbitIcons from '@kiwicom/universal-components/lib/fonts/orbit-icons.ttf';

import SharedApp from './App';

global.Buffer = Buffer; // No global Buffer in react-native, and graphql-relay needs it

class App extends React.Component<{||}> {
  componentDidMount() {
    Expo.Font.loadAsync('Roboto', Roboto);
    Expo.Font.loadAsync('orbit-icons', OrbitIcons);
  }

  render() {
    return <SharedApp />;
  }
}

export default App;

Expo.registerRootComponent(App);
