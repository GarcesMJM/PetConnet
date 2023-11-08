const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");
const firebaseAuth = require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyBHZ6XTuHPmIy1jnv0yHbLpXaiNqkPqQGY",
    authDomain: "petconnect-67be4.firebaseapp.com",
    projectId: "petconnect-67be4",
    storageBucket: "petconnect-67be4.appspot.com",
    messagingSenderId: "508382879611",
    appId: "1:508382879611:web:b9915c9d1fcc41cf5ce7de",
    measurementId: "G-XDFEZ2YZ4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = firebaseAuth.getAuth(app);
const storage = getStorage(app);

module.exports = { auth, storage };