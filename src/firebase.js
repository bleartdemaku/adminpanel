import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Add Firebase storage
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA5yRJsqWnRJA6TNCC1i_si33cQinDIt8g",
  authDomain: "netflix-ae663.firebaseapp.com",
  projectId: "netflix-ae663",
  storageBucket: "netflix-ae663.appspot.com",
  messagingSenderId: "87631519816",
  appId: "1:87631519816:web:769e3800fac7948173f87d",
  measurementId: "G-Z4FGKTHN4J",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
