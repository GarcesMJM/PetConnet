const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");
const { getFirestore } = require("firebase/firestore");
const firebaseAuth = require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyDp11FAxsh_JtvCyzj8sf9OXbmBO4PGBt8",
    authDomain: "petconnect2-4be50.firebaseapp.com",
    projectId: "petconnect2-4be50",
    storageBucket: "petconnect2-4be50.appspot.com",
    messagingSenderId: "948988551923",
    appId: "1:948988551923:web:7608652b11c5d836278d86",
    measurementId: "G-NWXPKFVQDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = firebaseAuth.getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

module.exports = { auth, storage, db };