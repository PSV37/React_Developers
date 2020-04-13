import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { async } from 'q';
import {config} from './config'

// const config = {
//   apiKey: 'AIzaSyBYqJ4npfMreaUXa2bSiADIzCzqAkWBKWw',
//   authDomain: 'crwn-db-7fa9f.firebaseapp.com',
//   databaseURL: 'https://crwn-db-7fa9f.firebaseio.com',
//   projectId: 'crwn-db-7fa9f',
//   storageBucket: 'crwn-db-7fa9f.appspot.com',
//   messagingSenderId: '611308179538',
//   appId: '1:611308179538:web:a227bd112f7ea9ff8a0f8b',
//   measurementId: 'G-D4V5M67E3J',
// };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  console.log({ snapshot });
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

// Add shop collections to firestore at once
export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj);
  })

  return await batch.commit();
}

// Get shop data from firestore and convert it  into map
export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();
    return {
      routeName : encodeURI(title.toLowerCase()),
      id:doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Login with google using firebase
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
