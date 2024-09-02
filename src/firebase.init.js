// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHXd9U3hl_DbbE_6BlpwZL1noi_KBrxsc",
  authDomain: "dragon-auth-ae584.firebaseapp.com",
  projectId: "dragon-auth-ae584",
  storageBucket: "dragon-auth-ae584.appspot.com",
  messagingSenderId: "104088247888",
  appId: "1:104088247888:web:0f33ef75cfcf6e3b863b55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
