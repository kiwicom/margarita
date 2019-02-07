// @flow

import * as React from 'react';
import { Dimensions } from 'react-native';

import withContext from '../src/withContext/withContext';
import { getLayout } from './LayoutContextHelpers';

type Props = {|
  +children: React.Node,
|};

type State = {|
  layout: number,
|};

const defaultState = {
  layout: getLayout(Dimensions.get('window').width),
};

const { Provider, Consumer } = React.createContext<State>(defaultState);

export default class LayoutContextProvider extends React.Component<
  Props,
  State,
> {
  constructor() {
    super();

    this.state = {
      ...defaultState,
    };
  }

  componentDidMount() {
    Dimensions.addEventListener('change', this.handleDimensionsChange);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.handleDimensionsChange);
  }

  handleDimensionsChange = ({ window }: Object) => {
    const { layout } = this.state;
    const newLayout = getLayout(window.width);
    if (layout !== newLayout) {
      this.setState({
        layout: newLayout,
      });
    }
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const withLayoutContext = (select: State => Object) =>
  withContext<State>(select, Consumer);

export type LayoutContextState = State;
