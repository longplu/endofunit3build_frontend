import firebase from "firebase/app";
import 'firebase/auth';
//import 'firebase/database';
//import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCsNYUvLfaNW1kTbhveScOUY5wAb2qV6FM",
    authDomain: "react-firebase-projects-44d7d.firebaseapp.com",
    projectId: "react-firebase-projects-44d7d",
    storageBucket: "react-firebase-projects-44d7d.appspot.com",
    messagingSenderId: "588759459800",
    appId: "1:588759459800:web:9a0ecc1035cbbe3f1034ad"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

function login() {
    return auth.signInWithPopup(provider);
}

function logout() {
    return auth.signOut();
}

export { auth, login, logout };