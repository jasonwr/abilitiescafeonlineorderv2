import firebase from 'firebase';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyD1dy2yFia2uyM1v7axVWzy85fRWR3wOu0",
    authDomain: "tempabilitiescafe.firebaseapp.com",
    databaseURL: "https://tempabilitiescafe.firebaseio.com",
    projectId: "tempabilitiescafe",
    storageBucket: "tempabilitiescafe.appspot.com",
    messagingSenderId: "809089724193",
    appId: "1:809089724193:web:58df550939ddcabc249860",
    measurementId: "G-EGQYGVXYXF"
  };

export const firebaseDB = firebase.initializeApp(firebaseConfig);

export const userRef = firebaseDB.database().ref("users");

export const itemRef = firebaseDB.database().ref("item");