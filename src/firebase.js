import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJbHAGDqHGi-0jntasKPmIjt_m47pdtN4",
    authDomain: "bt3103-week-6-e638c.firebaseapp.com",
    projectId: "bt3103-week-6-e638c",
    storageBucket: "bt3103-week-6-e638c.appspot.com",
    messagingSenderId: "844466115089",
    appId: "1:844466115089:web:ded7d8fd1878098f0f17b0",
    measurementId: "G-P7QKGN9L3M"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;