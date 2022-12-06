// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';



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

// Initialize Firebase app
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

//For authentication / login popup
const provider = new firebase.auth.GoogleAuthProvider();

//For storing pictures and videos.
const storage = firebase.storage()




export const db = app.firestore();

export {auth, provider, storage};
// export default db;