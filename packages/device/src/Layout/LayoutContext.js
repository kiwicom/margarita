// @flow

import * as React from 'react';
import { Dimensions, Platform } from 'react-native';
import { withContext } from '@kiwicom/margarita-utils';

import { getLayout } from './LayoutContextHelpers';
import { LAYOUT } from './LayoutConstants';

type Props = {|
  +children: React.Node,
|};

type State = {|
  layoutReady: boolean,
  layout: number,
|};

/**
 * NOTE: Default `layoutReady` value needs to be `false` only on web,
 * where it's switched to `true` together with `layout` value
 * initialisation inside `componentDidMount` because of Next.js SSR.
 */
const defaultState = {
  layoutReady: Platform.OS !== 'web',
  layout:
    Platform.OS === 'web'
      ? LAYOUT.largeDesktop
      : getLayout(Dimensions.get('window').width),
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
    const layout = getLayout(Dimensions.get('window').width);
    if (!this.state.layoutReady || this.state.layout !== layout) {
      this.setState({
        layoutReady: true,
        layout,
      });
    }

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
