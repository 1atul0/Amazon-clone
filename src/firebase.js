// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyALZhgxm3QsBS8b3i1E37bE4k3KGI1JMQE",
    authDomain: "clone-7b970.firebaseapp.com",
    projectId: "clone-7b970",
    storageBucket: "clone-7b970.appspot.com",
    messagingSenderId: "887529020608",
    appId: "1:887529020608:web:997c40100f834bb4e5a125",
    measurementId: "G-MVR0LHWXFS"
  };

  const firebaseApp=firebase.initializeApp( firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};