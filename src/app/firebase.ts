// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBciUkpi0A8ikTxYtkS89zs2qvUV_RJiI",
  authDomain: "course-selling-app-8fd83.firebaseapp.com",
  projectId: "course-selling-app-8fd83",
  storageBucket: "course-selling-app-8fd83.appspot.com",
  messagingSenderId: "490592030695",
  appId: "1:490592030695:web:a7cf0f196b084b1a7f7742"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
