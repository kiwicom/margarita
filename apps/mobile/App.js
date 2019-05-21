// @flow

import * as React from 'react';
import {
  createAppContainer,
  type NavigationContainer,
  type NavigationState,
} from 'react-navigation';
import {
  SearchContextProvider,
  UserContextProvider,
  BookingContextProvider,
} from '@kiwicom/margarita-core';
import { AlertContextProvider } from '@kiwicom/margarita-components';
import { LayoutContextProvider } from '@kiwicom/margarita-device';

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
      <UserContextProvider>
        <BookingContextProvider>
          <SearchContextProvider>
            <AlertContextProvider>
              <AppContainer />
            </AlertContextProvider>
          </SearchContextProvider>
        </BookingContextProvider>
      </UserContextProvider>
    </LayoutContextProvider>
  );
}
