// Import the functions you need from the SDKs you need
const firebase = require('firebase/app');
const firebaseAuth = require('firebase/auth');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebaseAuth.getAuth(app);

async function Login(req, res) {
  try {
    const { email, password } = req.body;

    // Inicia sesión con correo electrónico y contraseña
    await firebaseAuth.signInWithEmailAndPassword(auth, email, password);

    return res.status(200).send({message: 'Sesión iniciada'});
  } catch (error) {
    console.log('Error al iniciar sesión:', error);
    return res.status(500).send({message: 'Error al iniciar sesión'});
  }
}
module.exports = Login;