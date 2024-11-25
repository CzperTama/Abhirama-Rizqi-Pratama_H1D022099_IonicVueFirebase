// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB6MeEdLWkusCLOdxnkp5zm4QLOyrRJP08",
  authDomain: "vue-firebase-867da.firebaseapp.com",
  projectId: "vue-firebase-867da",
  storageBucket: "vue-firebase-867da.firebasestorage.app",
  messagingSenderId: "835726058845",
  appId: "1:835726058845:web:ba0d2e42333eb9081d74b4"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db };
