// @flow

import firebase from 'firebase/app';

export const signInWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  await firebase.auth().signInWithPopup(provider);
};
