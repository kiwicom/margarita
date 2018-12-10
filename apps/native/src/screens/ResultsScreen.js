// @flow

import * as React from 'react';
import {
  AnywhereResults,
  EmptyResults,
  ResultsList,
} from '@kiwicom/margarita-core';

type Props = Object;

export default class ResultsScreen extends React.Component<Props> {
  render() {
    return (
      <>
        <AnywhereResults />
        <EmptyResults />
        <ResultsList />
      </>
    );
  }
}
