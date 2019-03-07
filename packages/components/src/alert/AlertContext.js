// @flow

import * as React from 'react';
import { Alert, Platform } from 'react-native';
import { withContext, noop } from '@kiwicom/margarita-utils';

export type AlertContent = {|
  +title?: string,
  +message: string,
|};

type Props = {|
  +children: React.Node,
|};

type State = {|
  alertContent: AlertContent | null,
  actions: {
    +setAlertContent: (alertContent: AlertContent | null) => void,
  },
|};

const defaultState = {
  alertContent: null,
  actions: {
    setAlertContent: noop,
  },
};

const { Provider, Consumer } = React.createContext<State>(defaultState);

export default class AlertContextProvider extends React.Component<
  Props,
  State,
> {
  constructor(props: Props) {
    super(props);

    this.state = {
      ...defaultState,
      actions: {
        setAlertContent: this.setAlertContent,
      },
    };
  }

  setAlertContent = (alertContent: AlertContent | null) => {
    if (Platform.OS === 'web') {
      this.setState({ alertContent });
    } else if (alertContent != null) {
      Alert.alert(alertContent.title ?? '', alertContent.message);
    }
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const withAlertContext = (select: State => Object) =>
  withContext<State>(select, Consumer);

export type AlertContextState = State;
