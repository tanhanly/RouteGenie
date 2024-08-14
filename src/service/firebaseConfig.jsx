// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm2lY7L7Yf63xX7Wu7Yl2-_xcE07iOUtc",
  authDomain: "aitravelplanner-c9faf.firebaseapp.com",
  projectId: "aitravelplanner-c9faf",
  storageBucket: "aitravelplanner-c9faf.appspot.com",
  messagingSenderId: "920983057122",
  appId: "1:920983057122:web:7eb1e8ef69f0db9dfc24bb",
  measurementId: "G-XZTMPL9XPX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
//const analytics = getAnalytics(app);