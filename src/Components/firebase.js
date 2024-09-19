// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRPsJhryjNqBmOap2pRAIYaXcK3A2y-dk",
  authDomain: "blood-bank-8713.firebaseapp.com",
  projectId: "blood-bank-8713",
  storageBucket: "blood-bank-8713.appspot.com",
  messagingSenderId: "945142607371",
  appId: "1:945142607371:web:2142bcf265144302a3e10e",
  measurementId: "G-ERDK8P5TVF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
