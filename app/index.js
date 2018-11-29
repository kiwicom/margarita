// @flow

import React from 'react';
import * as Expo from 'expo';

import SharedApp from './src/App';

const App = () => <SharedApp />;

export default App;

Expo.registerRootComponent(App);
