// @flow

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
} from 'react-native-dotenv';

const CONFIG = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
};

/**
 * NOTE: Condition prevents repeated Firebase initialisation,
 * which can occur during web version hot reload in development mode.
 * Also forbids initialisation in case when firebase .env vars
 * are not set (and left empty).
 */
if (!firebase.apps.length && FIREBASE_API_KEY.length > 0) {
  firebase.initializeApp(CONFIG);
}
