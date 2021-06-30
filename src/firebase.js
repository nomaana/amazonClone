import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyARu9-3B3vkOHazjY4TML5MUApBcsTf0gk",
  authDomain: "clone-197dc.firebaseapp.com",
  databaseURL: "https://clone-197dc.firebaseio.com",
  projectId: "clone-197dc",
  storageBucket: "clone-197dc.appspot.com",
  messagingSenderId: "210776843080",
  appId: "1:210776843080:web:3d7e2a57019e5324cec97d",
  measurementId: "G-P36N7X4WCN",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
