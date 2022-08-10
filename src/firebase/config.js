// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD65ZE7G0Fclp8nlI0qK-2Tep4Elol6OKQ",
  authDomain: "authenticator-1bf5c.firebaseapp.com",
  projectId: "authenticator-1bf5c",
  storageBucket: "authenticator-1bf5c.appspot.com",
  messagingSenderId: "597413668671",
  appId: "1:597413668671:web:d0f87215cb18751760958a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
