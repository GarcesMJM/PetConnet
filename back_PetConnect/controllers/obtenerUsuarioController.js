const admin = require('firebase-admin');

async function obtenerUsuario(req, res) {
  try {
    const { token } = req.body;

    // Verifica el token
    const decodedToken = await admin.auth().verifyIdToken(token);

    // Usa el UID del usuario para obtener su información de Firestore
    const doc = await admin.firestore().collection('usuarios').doc(decodedToken.uid).get();

    if (!doc.exists) {
      console.log('No se encontró al usuario');
      return res.status(404).send({message: 'No se encontró al usuario'});
    } else {
      console.log('Información del usuario:', doc.data());
      return res.status(200).send(doc.data());
    }
  } catch (error) {
    console.log('Error al obtener la información del usuario:', error);
    return res.status(500).send({message: 'Error al obtener la información del usuario'});
  }
}

module.exports = obtenerUsuario;
