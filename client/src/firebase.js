// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-aa686.firebaseapp.com",
  projectId: "mern-estate-aa686",
  storageBucket: "mern-estate-aa686.appspot.com",
  messagingSenderId: "472888731049",
  appId: "1:472888731049:web:770507fd9c6dcacd8a50b8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);