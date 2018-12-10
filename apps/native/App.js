// @flow

import * as React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Routes from '@kiwicom/margarita-core/config/routes';

import { SearchScreen, ResultsScreen, PlacePickerScreen } from './src/screens';

const AppNavigator = createStackNavigator({
  [Routes.SEARCH]: {
    screen: SearchScreen,
  },
  [Routes.RESULTS]: {
    screen: ResultsScreen,
  },
  [Routes.PLACE_PICKER]: {
    screen: PlacePickerScreen,
  },
});

export default createAppContainer(AppNavigator);
