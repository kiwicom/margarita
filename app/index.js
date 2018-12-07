// @flow

import React from 'react';
import * as Expo from 'expo';
import { Buffer } from 'buffer';

import SharedApp from './src/App';

global.Buffer = Buffer; // No global Buffer in react-native, and graphql-relay needs it
const App = () => <SharedApp />;

export default App;

Expo.registerRootComponent(App);
