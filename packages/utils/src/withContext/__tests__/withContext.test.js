// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import withContext from '../withContext';

const defaultValue = {
  count: 0,
  note: '',
  incrementCount: () => {},
  setNote: () => {},
};
const { Provider: ContextProvider, Consumer } = React.createContext(
  defaultValue,
);

type State = {|
  count: number,
  note: string,
  +incrementCount: () => void,
  +setNote: (note: string) => void,
|};

type Props = {|
  +children: React.Node,
|};

class Provider extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      ...defaultValue,
      incrementCount: this.incrementCount,
      setNote: this.setNote,
    };
  }

  incrementCount = () => this.setState(state => ({ count: state.count + 1 }));

  setNote = (note: string) => this.setState({ note });

  render() {
    return (
      <ContextProvider value={this.state}>
        {this.props.children}
      </ContextProvider>
    );
  }
}

const myWithContext = (select: State => Object) =>
  withContext(select, Consumer);

type CountProps = {|
  +count: number,
  +incrementCount: () => void,
  +setNote: (text: string) => void,
|};

class MyComponent extends React.Component<CountProps> {
  render() {
    return null;
  }
}
const MyComponentWithContext = myWithContext(
  ({ count, incrementCount, setNote }) => ({ count, incrementCount, setNote }),
)(MyComponent);

describe('withContext', () => {
  it('injects only the props from the select function', () => {
    const wrapper = renderer.create(
      <Provider>
        <MyComponentWithContext />
      </Provider>,
    );

    const WrappedComponent = wrapper.root.findByType(MyComponent);

    expect(WrappedComponent.props.count).toBe(0);
    expect(WrappedComponent.props.note).toBeUndefined();
    expect(typeof WrappedComponent.props.incrementCount).toEqual('function');
    expect(typeof WrappedComponent.props.setNote).toEqual('function');
  });
});
