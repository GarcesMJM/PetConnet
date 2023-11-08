const admin = require('firebase-admin');
const firebase = require('firebase/app');
const firestore = require('firebase/firestore')

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
const db = firestore.getFirestore(app);


async function guardarMascota(req, res) {
  try {

    const { foto_perfil, name, token } = req.body;
    
    // Verifica el token
    const decodedToken = await admin.auth().verifyIdToken(token);

    // Usa el UID del usuario para obtener su información de Firestore
    const doc = await admin.firestore().collection('usuarios').doc(decodedToken.uid).get();

    if (!doc.exists) {
      console.log('No se encontró al usuario');
      return res.status(404).send({message: 'No se encontró al usuario'});
    } else {
      console.log('Información del usuario:', doc.data());
      const mascota = {
        imagen: foto_perfil,
        name: name,
      }
      console.log(mascota);

      await firestore.addDoc(firestore.collection(db, 'mascotas'),{...mascota});



      return res.status(200).send({message: true});
    }

  } catch (error) {
    console.log('Error al obtener la información del usuario:', error);
    return res.status(500).send({message: 'Error al obtener la información del usuario'});
  }
}

module.exports = guardarMascota;