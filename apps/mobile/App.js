// @flow

import {
  createAppContainer,
  type NavigationContainer,
  type NavigationState,
} from 'react-navigation';

import TabNavigator from './src/navigation/TabNavigator';

type NavigationOptions = {};
type NavigationProps = {};

const AppContainer: NavigationContainer<
  NavigationState,
  NavigationOptions,
  NavigationProps,
> = createAppContainer(TabNavigator);

export default AppContainer;
