import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


const firebaseConfig = {

    apiKey: "AIzaSyAu-NNdHIQw1Xty5mieOr11eS7ndSdvzPI",
    authDomain: "login-198fb.firebaseapp.com",
    projectId: "login-198fb",
    storageBucket: "login-198fb.appspot.com",
    messagingSenderId: "683055143824",
    appId: "1:683055143824:web:5454d342c31cb6af1df115",
    measurementId: "G-N5C2ZB2GH4"  
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}


export {firebase}