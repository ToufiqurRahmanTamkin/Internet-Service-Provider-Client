import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './firebase.config';

export const firebaseInitialize = () => {
   if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
   } else {
      firebase.app();
   }
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithSocialPopup = (provider) => {
   return firebase.auth().signInWithPopup(provider)
      .then((result) => {
         const user = result.user;
         user.errorMessage = '';
         return user;
      })
      .catch((error) => {
         const user = {};
         user.errorMessage = error.message;
         return user;
      });
};
