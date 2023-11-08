// Import the functions you need from the SDKs you need
const admin = require('firebase-admin');
const firebase = require('firebase/app');
const firebaseAuth = require('firebase/auth');
const { sign } = require("jsonwebtoken");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp11FAxsh_JtvCyzj8sf9OXbmBO4PGBt8",
  authDomain: "petconnect2-4be50.firebaseapp.com",
  projectId: "petconnect2-4be50",
  storageBucket: "petconnect2-4be50.appspot.com",
  messagingSenderId: "948988551923",
  appId: "1:948988551923:web:afd3d0cff1d450ae278d86",
  measurementId: "G-3JCCDR9K1G",
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

    // Usa el UID del usuario para obtener su información de Firestore
    const doc = await admin.firestore().collection('usuarios').doc(userCredential.user.uid).get();

    if (!doc.exists) {
      console.log('No se encontró al usuario');
      return res.status(404).send({message: 'No se encontró al usuario'});
    } else {
      const usuario = doc.data();

      return res.status(200).send({message: 'Sesión iniciada', token: idToken, usuario: usuario.usuario});
    }
  } catch (error) {
    console.log('Error al iniciar sesión:', error);
    return res.status(500).send({message: 'Error al iniciar sesión'});
  }
}

module.exports = Login;