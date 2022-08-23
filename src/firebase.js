// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3JuqTPGKD0-8zApk-GSbhgIv0ubtJFqA",
  authDomain: "ampeer-bac80.firebaseapp.com",
  projectId: "ampeer-bac80",
  storageBucket: "ampeer-bac80.appspot.com",
  messagingSenderId: "748608262627",
  appId: "1:748608262627:web:eeaabd2019bd13f02ed0d6",
  measurementId: "G-N0NWEZ1RT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()


export {auth, googleProvider, app, signInWithPopup}