import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './firebase.config';

export const firebaseInitialize = () => {
   if (!firebase.apps.length) {
       firebase.initializeApp(firebaseConfig);
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


export const googleSignIn = () => {
   const provider = new firebase.auth.GoogleAuthProvider();

   return firebase.auth().signInWithPopup(provider)
       .then(res => currentUser(res.user))
};

export const githubSignIn = () => {
   const provider = new firebase.auth.GithubAuthProvider();

   return firebase.auth().signInWithPopup(provider)
       .then(res => currentUser(res.user))
};

export const emailSignUp = (name, email, password) => {
   return firebase.auth().createUserWithEmailAndPassword(email, password)
       .then((res) => {
           updateUser(name);
           const user = currentUser(res.user);
           user.name = name;
           user.photo = "https://i.ibb.co/BfDJngj/avatar.png";
           return user;
       })
};

export const emailLogin = (email, password) => {
   return firebase.auth().signInWithEmailAndPassword(email, password)
       .then(res => currentUser(res.user))
};

export const logOutUser = () => {
   return firebase.auth().signOut()
       .then(() => {
           console.log("Sign Out Successful");
           return { isLoggedIn: false }
       })
};

const currentUser = (user) => {
   const { displayName, email, photoURL } = user;
   const userInfo = {
       isLoggedIn: true,
       name: displayName,
       email: email,
       photo: photoURL,
       error: ""
   }
   return userInfo;
};

const updateUser = name => {
   const user = firebase.auth().currentUser;
   user.updateProfile({
       displayName: name,
       photoURL: "https://i.ibb.co/BfDJngj/avatar.png"
   }).then(() => {
       console.log("Update Successfull");
   }).catch(function (error) {
       console.log(error.message)
   });
};
