// @flow

import * as React from 'react';
import { Search } from '@kiwicom/margarita-core';
import type { Navigation } from '@kiwicom/margarita-navigation';

type Props = {|
  +navigation: Navigation,
|};

export default class SearchScreen extends React.Component<Props> {
  render() {
    return (
      <>
        <Search navigation={this.props.navigation} />
      </>
    );
  }
}
