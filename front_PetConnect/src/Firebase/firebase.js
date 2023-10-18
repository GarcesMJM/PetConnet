// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHZ6XTuHPmIy1jnv0yHbLpXaiNqkPqQGY",
  authDomain: "petconnect-67be4.firebaseapp.com",
  projectId: "petconnect-67be4",
  storageBucket: "petconnect-67be4.appspot.com",
  messagingSenderId: "508382879611",
  appId: "1:508382879611:web:d885779614c09bef5ce7de",
  measurementId: "G-7W6QELPCB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Auth and Firestore
const auth = getAuth();
const db = getFirestore();

export { auth, db };