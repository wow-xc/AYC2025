// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// (여기에 네가 복사한 firebaseConfig 정보 입력!)
const firebaseConfig = {
  apiKey: "AIzaSyD8wPlOMuOe4Y6WbClju_d6HwU7L3HmzFc",
  authDomain: "ayc2025.firebaseapp.com",
  projectId: "ayc2025",
  appId: "1:210373040896:web:3ddcd3b24cbdaf702e71e5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged };
