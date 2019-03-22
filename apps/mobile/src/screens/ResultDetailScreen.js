// @flow

import * as React from 'react';
import { ResultDetail } from '@kiwicom/margarita-core';
import { type NavigationScreenProp } from 'react-navigation';

type NavigationParams = {|
  +bookingToken: string,
|};

type Props = {|
  +navigation: NavigationScreenProp<NavigationParams>,
|};

export default class ResultDetailScreen extends React.Component<Props> {
  render() {
    const bookingToken = this.props.navigation.getParam('bookingToken');
    return <ResultDetail bookingToken={bookingToken} />;
  }
}
