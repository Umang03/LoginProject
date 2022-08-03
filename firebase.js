
import { initializeApp } from "firebase/app";

import {getFirestore, getDoc,setDoc,doc} from "firebase/firestore" ;
import {getAuth,} from "firebase/auth" ;

const firebaseConfig = {
    apiKey: "AIzaSyDDQ-UeNFuTT06DYwthUY0-QmvQan62Vms",
    authDomain: "fir-crud-3ad81.firebaseapp.com",
    projectId: "fir-crud-3ad81",
    storageBucket: "fir-crud-3ad81.appspot.com",
    messagingSenderId: "1019325828014",
    appId: "1:1019325828014:web:22df141226f061c87e563f",
    measurementId: "G-RJG59PTCQR"
  };

export const app = initializeApp(firebaseConfig);

export const auth= getAuth(app) ;


export const db =getFirestore(app) ;

 export const createUserDocument = (user, additionalData,Mobile)=>
 {

const myDoc = doc(db,"Users",user.uid)
    getDoc(myDoc)
      .then((snapshot)=>
      {
        if(snapshot.exists)
        {
          const { email } = user;
          const { UserName } = additionalData;
          const {Phoneno} = Mobile;

          try
          {
            setDoc(myDoc,{
              UserName,
              email,
              Phoneno,
              createdAt: new Date(),
            });
       
          }
          catch(error)
          {
            console.log('Error in creating user', error);

          }
        }
        else 
        {
          alert("NO Doc Found")
        }
      })
      .catch((error)=>
      {
        alert(error.message) ;
      }
      )

    }
