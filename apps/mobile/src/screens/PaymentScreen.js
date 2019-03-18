// @flow

import * as React from 'react';
import { Payment } from '@kiwicom/margarita-core';
import { type NavigationScreenProp } from 'react-navigation';

type NavigationParams = {||};

type Props = {|
  +navigation: NavigationScreenProp<NavigationParams>,
|};

export default class PaymentScreen extends React.Component<Props> {
  render() {
    return <Payment />;
  }
}
