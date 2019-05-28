// @flow

import * as React from 'react';
import { BookingCompleted } from '@kiwicom/margarita-core';
import { type NavigationScreenProp } from 'react-navigation';

type NavigationParams = {||};

type Props = {|
  +navigation: NavigationScreenProp<NavigationParams>,
|};

export default class BookingCompletedScreen extends React.Component<Props> {
  render() {
    return <BookingCompleted />;
  }
}
