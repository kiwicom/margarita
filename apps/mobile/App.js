// @flow

import * as React from 'react';
import {
  createAppContainer,
  type NavigationContainer,
  type NavigationState,
} from 'react-navigation';
import { ContextComposition } from '@kiwicom/margarita-core';

import TabNavigator from './src/navigation/TabNavigator';

type NavigationOptions = {};
type NavigationProps = {};

const AppContainer: NavigationContainer<
  NavigationState,
  NavigationOptions,
  NavigationProps,
> = createAppContainer(TabNavigator);

export default function App() {
  return (
    <ContextComposition>
      <AppContainer />
    </ContextComposition>
  );
}
