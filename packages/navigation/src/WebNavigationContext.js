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
    setParams: () => {},
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
        setParams: this.setParams,
      },
    };
  }

  navigate = (url: Route, params?: Object) => {
    this.setParams(params);
    this.goTo(url, params);
  };

  goTo = (url: Route, params?: Object) => {
    Router.push({
      pathname: `/${url}`,
      query: params,
    });
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
