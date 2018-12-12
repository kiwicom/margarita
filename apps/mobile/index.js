// @flow

import React from 'react';
import * as Expo from 'expo';
import { Buffer } from 'buffer';
import { Roboto } from '@kiwicom/margarita-tools';

import SharedApp from './App';

global.Buffer = Buffer; // No global Buffer in react-native, and graphql-relay needs it

class App extends React.Component<{||}> {
  componentDidMount() {
    Expo.Font.loadAsync('Roboto', Roboto);
  }

  render() {
    return <SharedApp />;
  }
}

export default App;

Expo.registerRootComponent(App);
