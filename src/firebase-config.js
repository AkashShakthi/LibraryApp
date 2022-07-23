import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBzOZCXhPyohQXrZaTaUqnTieuDUxd7KY",
  authDomain: "react-contact-11184.firebaseapp.com",
  projectId: "react-contact-11184",
  storageBucket: "react-contact-11184.appspot.com",
  messagingSenderId: "550955063871",
  appId: "1:550955063871:web:b8577eb32f5fc8b362368a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
