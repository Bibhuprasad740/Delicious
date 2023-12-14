import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB2aT0hPBLCaHuTnPdZd2W5PDInutIyZAE",
  authDomain: "deli-29601.firebaseapp.com",
  databaseURL:
    "https://deli-29601-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "deli-29601",
  storageBucket: "deli-29601.appspot.com",
  messagingSenderId: "356271969735",
  appId: "1:356271969735:web:4d95b9eb7724f34c24b5e2",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
