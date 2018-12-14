// @flow

import {
  Routes,
  createStackNavigator,
  createAppContainer,
  type NavigationState,
  type NavigationNavigator,
  type NavigationRouteConfigMap,
  type NavigationContainer,
} from '@kiwicom/margarita-navigation';

import { SearchScreen, ResultsScreen, PlacePickerScreen } from './src/screens';

type NavigationOptions = {};
type NavigationProps = {};

const AppNavigator: NavigationNavigator<
  NavigationState,
  NavigationOptions,
  NavigationProps,
> = createStackNavigator(
  ({
    [Routes.SEARCH]: {
      screen: SearchScreen,
    },
    [Routes.RESULTS]: {
      screen: ResultsScreen,
    },
    [Routes.PLACE_PICKER]: {
      screen: PlacePickerScreen,
    },
  }: NavigationRouteConfigMap),
);

const AppContainer: NavigationContainer<
  NavigationState,
  NavigationOptions,
  NavigationProps,
> = createAppContainer(AppNavigator);

export default AppContainer;
