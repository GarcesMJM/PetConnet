// Import the functions you need from the SDKs you need
const firebase = require('firebase/app');
const firebaseAuth = require('firebase/auth');
const { sign } = require("jsonwebtoken");

// Your web app's Firebase configuration
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
const app = firebase.initializeApp(firebaseConfig);
const auth = firebaseAuth.getAuth(app);

async function Login(req, res) {
  try {
    const { email, password } = req.body;

    // Inicia sesión con correo electrónico y contraseña
    const userCredential = await firebaseAuth.signInWithEmailAndPassword(auth, email, password);

    // Obtiene el token de ID
    const idToken = await userCredential.user.getIdToken();

    return res.status(200).send({message: 'Sesión iniciada', token: idToken});
  } catch (error) {
    console.log('Error al iniciar sesión:', error);
    return res.status(500).send({message: 'Error al iniciar sesión'});
  }
}
module.exports = Login;
