// @flow

import * as React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Routes } from '@kiwicom/margarita-navigation';
import { Icon } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import SearchStack from './SearchStack';
import MMBStack from './MMBStack';

export default createBottomTabNavigator(
  {
    [Routes.SEARCH_TAB]: {
      screen: SearchStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="search" color={tintColor} />,
        title: 'Search',
      },
    },
    [Routes.BOOKING_TAB]: {
      screen: MMBStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ticket-outline" color={tintColor} />
        ),
        title: 'Booking',
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: defaultTokens.paletteProductNormal,
      inactiveTintColor: defaultTokens.colorIconSecondary,
    },
  },
);
