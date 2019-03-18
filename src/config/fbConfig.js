import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAQqBfXV0686xsNnal3PYJkRGUHWOEF9sc",
  authDomain: "marioplan-ae9e0.firebaseapp.com",
  databaseURL: "https://marioplan-ae9e0.firebaseio.com",
  projectId: "marioplan-ae9e0",
  storageBucket: "marioplan-ae9e0.appspot.com",
  messagingSenderId: "244158944481"
};

firebase.initializeApp(config);

export default firebase 