// @flow

import * as React from 'react';
import { Results } from '@kiwicom/margarita-core';

type Props = {|
  +navigation: {|
    +state: {|
      +params: {|
        +travelFrom: string,
        +travelTo: string,
        +travelFromName: string,
        +travelToName: string,
        +dateFrom: string,
        +dateTo: string,
        +returnDateFrom: string,
        +returnDateTo: string,
        +nightsInDestinationFrom?: number,
        +nightsInDestinationTo?: number,
        +adults: number,
        +infants: number,
        +sort: string,
      |},
    |},
  |},
|};

export default class ResultsScreen extends React.Component<Props> {
  render() {
    const { navigation } = this.props;
    return <Results {...navigation.state.params} />;
  }
}
