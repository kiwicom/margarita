// @flow

import * as React from 'react';
import { Search } from '@kiwicom/margarita-core';

type Props = Object;

export default class SearchScreen extends React.Component<Props> {
  render() {
    return (
      <>
        <Search navigation={this.props.navigation} />
      </>
    );
  }
}
