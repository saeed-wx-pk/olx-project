

import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA9dB6my4lO09g5VIiph5ntiYArCZEypo",
  authDomain: "olx-project-ef751.firebaseapp.com",
  projectId: "olx-project-ef751",
  storageBucket: "olx-project-ef751.appspot.com",
  messagingSenderId: "738095561968",
  appId: "1:738095561968:web:53fff9229b73db84d51635",
  measurementId: "G-WQT6M4NB9D",
  storageBucket:'gs://olx-project-ef751.appspot.com'
};

// Initialize Firebase

const app =  initializeApp(firebaseConfig)
getFirestore(app);
getAuth(app);
getStorage(app);


