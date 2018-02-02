import firebase from 'firebase'
import 'firebase/firestore'

var config = {
  apiKey: "AIzaSyBJGoBrFA1OOQUWnfp6zsScNNMP0EZWKD4",
  authDomain: "counter-f49eb.firebaseapp.com",
  databaseURL: "https://counter-f49eb.firebaseio.com",
  projectId: "counter-f49eb",
  storageBucket: "counter-f49eb.appspot.com",
  messagingSenderId: "724481990034"
  };

  firebase.initializeApp(config);
  const db = firebase.firestore();
  export default db;
