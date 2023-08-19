import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAblC_tCkO6qDCCfnodV76yWNJ-Hq1-6M4",
  authDomain: "blog-app-be2d6.firebaseapp.com",
  projectId: "blog-app-be2d6",
  storageBucket: "blog-app-be2d6.appspot.com",
  messagingSenderId: "1080120018785",
  appId: "1:1080120018785:web:8e29788245e4b7f466e720",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
