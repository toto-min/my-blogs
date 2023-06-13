// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi6xNwmnQG4mEnqoZv02zk2FaMRq3w0cA",
  authDomain: "my-bl-7fdbf.firebaseapp.com",
  projectId: "my-bl-7fdbf",
  storageBucket: "my-bl-7fdbf.appspot.com",
  messagingSenderId: "940009594729",
  appId: "1:940009594729:web:22ee0a99b5460e8db027f8",
  measurementId: "G-34MPJ0SYQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);