// @flow

import * as React from 'react';
import { withContext, noop } from '@kiwicom/margarita-utils';
import firebase from 'firebase/app';
import './Firebase';

import { signInWithGoogle } from './SignInHelpers';

type User = {|
  +uid: string,
  +email: string,
  +displayName: string,
  +photoURL: string,
|};

export type PhoneNumber = {|
  +countryCode: ?string,
  +number: ?string,
|};

type Props = {|
  +children: React.Node,
|};

type State = {|
  isFirebaseAvailable: boolean,
  isUserSignedIn: boolean,
  userEmail: ?string,
  userDisplayName: ?string,
  userId: ?string,
  profileImage: ?string,
  userPhoneNumber: ?PhoneNumber,
  +actions: {|
    +signIn: () => Promise<void> | void,
    +signOut: () => Promise<void> | void,
    +setUserPhoneNumber: PhoneNumber => Promise<void> | void,
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
  userId: null,
  profileImage: null,
  userPhoneNumber: null,
  actions: {
    signIn: noop,
    signOut: noop,
    setUserPhoneNumber: noop,
  },
};

const { Provider, Consumer } = React.createContext<State>(defaultState);

export default class UserContextProvider extends React.Component<Props, State> {
  firebaseListener: () => void;

  constructor(props: Props) {
    super(props);
    this.state = {
      ...defaultState,
      actions: {
        signIn: this.signIn,
        signOut: this.signOut,
        setUserPhoneNumber: this.setUserPhoneNumber,
      },
    };
  }

  componentDidMount() {
    if (this.state.isFirebaseAvailable) {
      this.firebaseListener = firebase
        .auth()
        .onAuthStateChanged(async (authUser: ?User) => {
          const userPhoneNumber = authUser
            ? await this.getPhoneNumberFromFirebase(authUser.uid)
            : null;

          this.setState(() => {
            return {
              isUserSignedIn: authUser != null,
              userPhoneNumber,
              ...this.mapUserData(authUser),
            };
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

  getUserRef = (userId: ?string) => {
    return userId && firebase.database().ref(`users/${userId}`);
  };

  getPhoneNumberFromFirebase = async (userId: string) => {
    const userRef = this.getUserRef(userId);
    if (userRef) {
      const phoneNumberSnapshot = await userRef
        .child('phoneNumber')
        .once('value');
      return phoneNumberSnapshot.val();
    }
    return null;
  };

  mapUserData = (authUser: ?User) => ({
    userId: authUser?.uid,
    userEmail: authUser?.email,
    userDisplayName: authUser?.displayName,
    profileImage: authUser?.photoURL,
  });

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

  setUserPhoneNumber = (phoneNumber: PhoneNumber) => {
    const { userId } = this.state;
    const userRef = this.getUserRef(userId);
    if (userRef) {
      try {
        userRef
          .child('phoneNumber')
          .set(phoneNumber, () =>
            this.setState({ userPhoneNumber: phoneNumber }),
          );
      } catch {
        // @TODO Handle error - show notification or message
      }
    }
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const withUserContext = (select: State => Object) =>
  withContext<State>(select, Consumer);

export type UserContextState = State;
