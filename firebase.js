import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAoY5R8AMZNYUDlAvlGT7QDu9VCSTYWvsU",
    authDomain: "fir-ae970.firebaseapp.com",
    projectId: "fir-ae970",
    storageBucket: "fir-ae970.appspot.com",
    messagingSenderId: "617410850358",
    appId: "1:617410850358:web:6b3c133b5c9f2c77e8b297"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();

  export default db;