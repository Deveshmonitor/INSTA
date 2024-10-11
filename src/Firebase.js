// firebase.js
import { initializeApp } from 'firebase/app';
import {getDatabase} from "firebase/database"
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { ref, set, get, child } from 'firebase/database';

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCBCIYhgMJ1CDrwfBkSLLuRciCVu7ah8Zo",
  authDomain: "instagram-login-4ae5f.firebaseapp.com",
  databaseURL: "https://instagram-login-4ae5f-default-rtdb.firebaseio.com",
  projectId: "instagram-login-4ae5f",
  storageBucket: "instagram-login-4ae5f.appspot.com",
  messagingSenderId: "1009811166776",
  appId: "1:1009811166776:web:a233d2bff04d1ca586b8cd",
  measurementId: "G-JCWYKZCX11"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

export { db, ref, set, get, child };

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, addDoc };
