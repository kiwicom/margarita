// @flow

import * as React from 'react';
import { ResultDetail } from '@kiwicom/margarita-core';
import { type NavigationScreenProp } from 'react-navigation';

type NavigationParams = {|
  +detailId: string,
|};

type Props = {|
  +navigation: NavigationScreenProp<NavigationParams>,
|};

export default class ResultDetailScreen extends React.Component<Props> {
  render() {
    const detailId = this.props.navigation.getParam('detailId');
    return <ResultDetail detailId={detailId} />;
  }
}
