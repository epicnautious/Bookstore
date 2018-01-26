import firebase from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyDABEQtiBIe-YxzOytpdH9fDOGzT7n9GNM",
    authDomain: "bookstore-d62b0.firebaseapp.com",
    databaseURL: "https://bookstore-d62b0.firebaseio.com",
    projectId: "bookstore-d62b0",
    storageBucket: "bookstore-d62b0.appspot.com",
    messagingSenderId: "547907472068"
  };

  firebase.initializeApp(config);
  const db = firebase.firestore();
  export default db;
