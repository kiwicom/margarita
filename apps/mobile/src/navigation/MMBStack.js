// @flow

import {
  createStackNavigator,
  type NavigationState,
  type NavigationNavigator,
  type NavigationRouteConfigMap,
} from 'react-navigation';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Routes } from '@kiwicom/margarita-navigation';

import {
  BookingsListScreen,
  BookingDetailScreen,
  ShareBookingScreen,
  ManageHelpScreen,
  ManageOtherScreen,
} from '../screens';

type NavigationOptions = {};
type NavigationProps = {};

const StackNavigator: NavigationNavigator<
  NavigationState,
  NavigationOptions,
  NavigationProps,
> = createStackNavigator(
  ({
    [Routes.BOOKING_LIST]: {
      screen: BookingsListScreen,
      navigationOptions: {
        title: 'My Bookings',
      },
    },
    [Routes.BOOKING_DETAIL]: {
      screen: BookingDetailScreen,
      navigationOptions: {
        title: 'Booking details',
      },
    },
    [Routes.MANAGE_SHARE_BOOKING]: {
      screen: ShareBookingScreen,
      navigationOptions: {
        title: 'Share Booking',
      },
    },
    [Routes.MANAGE_HELP]: {
      screen: ManageHelpScreen,
      navigationOptions: {
        title: 'Help',
      },
    },
    [Routes.MANAGE_OTHER]: {
      screen: ManageOtherScreen,
      navigationOptions: {
        title: 'Other',
      },
    },
  }: NavigationRouteConfigMap),
  {
    defaultNavigationOptions: {
      headerTintColor: defaultTokens.paletteProductNormal,
    },
  },
);

export default StackNavigator;
