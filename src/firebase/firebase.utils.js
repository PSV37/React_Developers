import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBYqJ4npfMreaUXa2bSiADIzCzqAkWBKWw',
  authDomain: 'crwn-db-7fa9f.firebaseapp.com',
  databaseURL: 'https://crwn-db-7fa9f.firebaseio.com',
  projectId: 'crwn-db-7fa9f',
  storageBucket: 'crwn-db-7fa9f.appspot.com',
  messagingSenderId: '611308179538',
  appId: '1:611308179538:web:a227bd112f7ea9ff8a0f8b',
  measurementId: 'G-D4V5M67E3J',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
