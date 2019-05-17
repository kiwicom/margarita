// @flow

import * as React from 'react';
import { withContext, noop } from '@kiwicom/margarita-utils';
import firebase from 'firebase/app';
import './Firebase';

import { signInWithGoogle } from './SignInHelpers';

type Props = {|
  +children: React.Node,
|};

type State = {|
  isFirebaseAvailable: boolean,
  isUserSignedIn: boolean,
  userEmail: ?string,
  userDisplayName: ?string,
  profileImage: ?string,
  +actions: {|
    +signIn: () => Promise<void> | void,
    +signOut: () => Promise<void> | void,
  |},
|};

/**
 * NOTE: As noted in docs https://kiwicom.github.io/margarita/docs/guide-firebase-user ,
 * project can be started with disabled (not set) Firebase part.
 * For this case we check if Firebase app was initialised
 * and store this information as `isFirebaseAvailable`,
 * so it can be then used to disable login part on `Profile` screen.
 */
const defaultState = {
  isFirebaseAvailable: firebase.apps.length > 0,
  isUserSignedIn: false,
  userEmail: null,
  userDisplayName: null,
  profileImage: null,
  actions: {
    signIn: noop,
    signOut: noop,
  },
};

const { Provider, Consumer } = React.createContext<State>(defaultState);

export default class UserContextProvider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      ...defaultState,
      actions: {
        signIn: this.signIn,
        signOut: this.signOut,
      },
    };
  }

  componentDidMount() {
    if (this.state.isFirebaseAvailable) {
      this.firebaseListener = firebase.auth().onAuthStateChanged(authUser => {
        this.setState({
          isUserSignedIn: authUser != null,
          ...this.mapUserData(authUser),
        });
      });
    }
  }

  componentWillUnmount() {
    if (this.firebaseListener) {
      /**
       * NOTE: Auth listener is removed by calling the unsubscribe
       * function returned by `onAuthStateChanged`
       * More info: https://firebase.google.com/docs/reference/js/firebase.auth.Auth#onauthstatechanged
       */
      this.firebaseListener();
    }
  }

  firebaseListener: () => void;

  mapUserData = (authUser: Object) => {
    return {
      userEmail: authUser?.email,
      userDisplayName: authUser?.displayName,
      profileImage: authUser?.photoURL,
    };
  };

  signIn = async () => {
    try {
      await signInWithGoogle();
    } catch (e) {
      // @TODO Handle sign-in error - show notification or message
    }
  };

  signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (e) {
      // @TODO Handle sign-in error - show notification or message
    }
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const withUserContext = (select: State => Object) =>
  withContext<State>(select, Consumer);

export type UserContextState = State;
