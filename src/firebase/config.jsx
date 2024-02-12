// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import{getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSoZ1BZ2AB-WnkOaujtdfjm9tNIbeD6JY",
  authDomain: "react-plan-9715d.firebaseapp.com",
  projectId: "react-plan-9715d",
  storageBucket: "react-plan-9715d.appspot.com",
  messagingSenderId: "813453287955",
  appId: "1:813453287955:web:1907dce4044331f63d55e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
export const provider=new GoogleAuthProvider()
export const db=getFirestore(app)