// @flow

import { Google } from 'expo';
import { Platform } from 'react-native';
import firebase from 'firebase/app';
import { GOOGLE_OAUTH_ANDROID, GOOGLE_OAUTH_IOS } from 'react-native-dotenv';

/**
 * NOTE: Direct Firebase login is not available for RN.
 * We are using `expo` Goole login to obtain user token.
 * And then passing it to Firebase `GoogleAuthProvider` to log user in.
 */

export const signInWithGoogle = async () => {
  const result = await Google.logInAsync({
    clientId:
      Platform.OS === 'android' ? GOOGLE_OAUTH_ANDROID : GOOGLE_OAUTH_IOS,
  });
  if (result.idToken) {
    const credential = firebase.auth.GoogleAuthProvider.credential(
      result.idToken,
    );
    await firebase.auth().signInAndRetrieveDataWithCredential(credential);
  } else {
    throw Error(result.type);
  }
};
