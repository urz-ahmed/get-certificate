import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCOVk1AwHM0XtxRcV9jbG3sx8NtwGvLQIg",
  authDomain: "iste-hit.firebaseapp.com",
  projectId: "iste-hit",
  storageBucket: "iste-hit.appspot.com",
  messagingSenderId: "13267577512",
  appId: "1:13267577512:web:72bb4275e1d2e52730709d",
  measurementId: "G-671N357T27",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); 

export default db;
