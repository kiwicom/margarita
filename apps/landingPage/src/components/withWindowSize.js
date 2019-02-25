// @flow

import * as React from 'react';

type State = {|
  +width: number,
|};

type Props = {
  width?: number,
};

export const withWindowSize = <PassedProps: {}>(
  WrappedComponent: React.ComponentType<PassedProps>,
): React.ComponentType<$Diff<PassedProps, Props>> => {
  return class extends React.Component<PassedProps, State> {
    state = {
      width: 0,
    };

    componentDidMount() {
      this.handleWindowSizeChange();
      window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
      const width = typeof window !== 'undefined' ? window.innerWidth : 0;
      this.setState({ width });
    };

    render() {
      return <WrappedComponent width={this.state.width} {...this.props} />;
    }
  };
};
