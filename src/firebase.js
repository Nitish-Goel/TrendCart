
import firebase from "firebase/compat/app";
import  "firebase/compat/auth";
import  "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQTfELIoEVzK22F_SzXuw5Co9a-N-wLOA",
    authDomain: "clone-30caf.firebaseapp.com",
    projectId: "clone-30caf",
    storageBucket: "clone-30caf.appspot.com",
    messagingSenderId: "236568658096",
    appId: "1:236568658096:web:24050a1d7a172e6089fb75",
    measurementId: "G-YVDTCGPQWF"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export {db, auth};