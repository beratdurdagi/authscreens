


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCv77nx1e94SomZIah8-S0wMaug0-ZA3A",
  authDomain: "authentication-87188.firebaseapp.com",
  projectId: "authentication-87188",
  storageBucket: "authentication-87188.appspot.com",
  messagingSenderId: "863196658940",
  appId: "1:863196658940:web:6f34c191c87320a84cab79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

const db=getFirestore();

export {auth,db}