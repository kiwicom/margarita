// @flow

import * as React from 'react';
import {
  createAppContainer,
  type NavigationContainer,
  type NavigationState,
} from 'react-navigation';
import { SearchContextProvider } from '@kiwicom/margarita-core';
import { LayoutContextProvider } from '@kiwicom/margarita-utils';

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
    <LayoutContextProvider>
      <SearchContextProvider>
        <AppContainer />
      </SearchContextProvider>
    </LayoutContextProvider>
  );
}
