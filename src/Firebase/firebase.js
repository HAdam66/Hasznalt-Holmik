import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCqPZ1QMJcyPIm0DA-IYoy6z6_7v0M9aL8",
  authDomain: "hasznalt-50bae.firebaseapp.com",
  databaseURL: "https://hasznalt-50bae-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "hasznalt-50bae",
  storageBucket: "hasznalt-50bae.appspot.com",
  messagingSenderId: "914708606846",
  appId: "1:914708606846:web:2c293ebb1fb1b7bfb40d2f"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage(app);