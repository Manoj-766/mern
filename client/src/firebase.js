// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: "nitc-blog-70209.firebaseapp.com",
  projectId: "nitc-blog-70209",
  storageBucket: "nitc-blog-70209.firebasestorage.app",
  messagingSenderId: "929967856579",
  appId: "1:929967856579:web:31781c27ff78fe017a3b76"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
