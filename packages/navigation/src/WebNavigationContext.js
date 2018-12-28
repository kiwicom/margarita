// @flow

import * as React from 'react';
import Router from 'next/router';

import type { Navigation, Route } from './types';

const defaultState = {
  navigation: {
    state: {
      params: {},
    },
    navigate: () => {},
  },
};

const { Consumer, Provider: ContextProvider } = React.createContext<State>(
  defaultState,
);

type Props = {|
  +children?: React.Node,
|};

export type State = {|
  navigation: Navigation,
|};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      ...defaultState,
      navigation: {
        ...defaultState.navigation,
        navigate: this.navigate,
      },
    };
  }

  navigate = (url: Route, params?: Object) => {
    this.setParams(params);
    this.goTo(url);
  };

  goTo = (url: Route) => {
    Router.push({ pathname: `/${url}` });
  };

  setParams = (params?: Object) => {
    if (params) {
      this.setState(state => ({
        navigation: {
          ...state.navigation,
          state: {
            ...state.navigation.state,
            params: {
              ...state.navigation.state.params,
              ...params,
            },
          },
        },
      }));
    }
  };

  render() {
    return (
      <ContextProvider value={this.state}>
        {this.props.children}
      </ContextProvider>
    );
  }
}

export { Consumer, Provider };
