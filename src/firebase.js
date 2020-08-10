import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD8bPibtQxHI2i_NqNbwr-NZutv-EQyPhE",
  authDomain: "clone-84165.firebaseapp.com",
  databaseURL: "https://clone-84165.firebaseio.com",
  projectId: "clone-84165",
  storageBucket: "clone-84165.appspot.com",
  messagingSenderId: "1016112903815",
  appId: "1:1016112903815:web:9d875029cfa09bc6c9ea22",
  measurementId: "G-DGD8MPDRV6",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
