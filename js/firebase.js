import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDAV06sRQLf3zeXh-C77-49BRoMtAiEiKw",
  authDomain: "rioshycardapio.firebaseapp.com",
  projectId: "rioshycardapio",
  storageBucket: "rioshycardapio.firebasestorage.app",
  messagingSenderId: "673349899022",
  appId: "1:673349899022:web:9c6e3a0d5d24bf1ab37d5f",
  measurementId: "G-B53FRXNELP",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
