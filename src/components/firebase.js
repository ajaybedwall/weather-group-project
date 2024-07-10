// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGqURxbo5Y_XvTxjfb7ItN2Wlhg0jCC5o",
  authDomain: "login-auth-8736e.firebaseapp.com",
  projectId: "login-auth-8736e",
  storageBucket: "login-auth-8736e.appspot.com",
  messagingSenderId: "1077440487295",
  appId: "1:1077440487295:web:939587f6ffecca5d2d844a",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
