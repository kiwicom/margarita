// @flow

import * as React from 'react';
import { withContext } from '@kiwicom/margarita-utils';

type Props = {|
  +children: React.Node,
|};

type State = {|
  isUserSignedIn: boolean,
|};

const defaultState = {
  isUserSignedIn: false,
};

const { Provider, Consumer } = React.createContext<State>(defaultState);

export default class UserContextProvider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      ...defaultState,
    };
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const withUserContext = (select: State => Object) =>
  withContext<State>(select, Consumer);

export type UserContextState = State;
