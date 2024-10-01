// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-e1aa3.firebaseapp.com",
  projectId: "mern-auth-e1aa3",
  storageBucket: "mern-auth-e1aa3.appspot.com",
  messagingSenderId: "400237493643",
  appId: "1:400237493643:web:a6b2c2b9b894e7eadb438e",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
