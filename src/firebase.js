import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAtHwRrzTUNun2pEDvLUEs7IPVscN0-WFs",
    authDomain: "netflix-clone-e9114.firebaseapp.com",
    projectId: "netflix-clone-e9114",
    storageBucket: "netflix-clone-e9114.appspot.com",
    messagingSenderId: "518457606512",
    appId: "1:518457606512:web:fc26f301334ad278934fb5",
    measurementId: "G-41GD94RGSB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;