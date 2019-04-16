// @flow

import * as React from 'react';
import { ResultDetail } from '@kiwicom/margarita-core';

type Props = {|
  +navigation: {|
    +state: {|
      +params: {|
        +bookingToken: string,
        +adults: number,
        +infants: number,
      |},
    |},
  |},
|};

export default class ResultDetailScreen extends React.Component<Props> {
  render() {
    return <ResultDetail {...this.props.navigation.state.params} />;
  }
}
