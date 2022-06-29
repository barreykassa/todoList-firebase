import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlYVlX-MT8aAECSwGZmo0cGQpPnbmzGA4",
  authDomain: "todo-list-firebase-40663.firebaseapp.com",
  projectId: "todo-list-firebase-40663",
  storageBucket: "todo-list-firebase-40663.appspot.com",
  messagingSenderId: "367272442768",
  appId: "1:367272442768:web:e7150e4c75280d149e1115",
  measurementId: "G-XV41D9ZNRB",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
