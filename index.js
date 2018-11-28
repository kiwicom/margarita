// @flow

import React from 'react';
import * as Expo from 'expo';

import SharedApp from './pages/App';

const App = () => <SharedApp />;

export default App;

Expo.registerRootComponent(App);
