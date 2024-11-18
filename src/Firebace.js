// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKKncb4_XUahsAO3tz7JiD2eCnvPHQ2OI",
  authDomain: "my-post-b9963.firebaseapp.com",
  projectId: "my-post-b9963",
  storageBucket: "my-post-b9963.firebasestorage.app",
  messagingSenderId: "198895691670",
  appId: "1:198895691670:web:7df93bf821663e81021fb7",
  databaseUrl:"https://my-post-b9963-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);