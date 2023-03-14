// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3ollEYMk3H8bU94YTRElZe092D-qXOnk",
  authDomain: "my-portfolio-8b0ab.firebaseapp.com",
  projectId: "my-portfolio-8b0ab",
  storageBucket: "my-portfolio-8b0ab.appspot.com",
  messagingSenderId: "82300509278",
  appId: "1:82300509278:web:923ec85f2be5c34f39a8cf",
  measurementId: "G-7V2NH6NJ1M",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
const analytics = getAnalytics(app);
