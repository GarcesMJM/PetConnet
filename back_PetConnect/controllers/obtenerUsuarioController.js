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
      const usuario = doc.data();

      // Obtiene la información de las mascotas del usuario
      const mascotasPromesas = usuario.mascotas.map(ref => ref.get());
      const mascotasDocs = await Promise.all(mascotasPromesas);
      const mascotas = mascotasDocs.map(doc => {
        let mascota = doc.data();
        mascota.id = doc.id;  // Aquí agregas el ID del documento a los datos de la mascota
        return mascota;
      });

      // Añade la información de las mascotas al usuario
      usuario.mascotas = mascotas;

      console.log('Información del usuario:', usuario);
      return res.status(200).send(usuario);
    }
  } catch (error) {
    console.log('Error al obtener la información del usuario:', error);
    return res.status(500).send({message: 'Error al obtener la información del usuario'});
  }
}

module.exports = obtenerUsuario;
