const admin = require('firebase-admin');

async function obtenerMascota(req, res) {
  try {
    const { id } = req.body;  // Obtiene el id de la mascota de los parámetros de la ruta

    // Usa el id para obtener la información de la mascota de Firestore
    const doc = await admin.firestore().collection('mascotas').doc(id).get();

    if (!doc.exists) {
      console.log('No se encontró la mascota');
      return res.status(404).send({message: 'No se encontró la mascota'});
    } else {
      const mascota = doc.data();

      // Obtiene la información de las publicaciones de la mascota
      const publicacionesPromesas = mascota.publicaciones.map(ref => ref.get());
      const publicacionesDocs = await Promise.all(publicacionesPromesas);
      const publicaciones = publicacionesDocs.map(doc => doc.data());

      // Añade la información de las publicaciones a la mascota
      mascota.publicaciones = publicaciones;

      console.log('Información de la mascota:', mascota);
      return res.status(200).send(mascota);
    }
  } catch (error) {
    console.log('Error al obtener la información de la mascota:', error);
    return res.status(500).send({message: 'Error al obtener la información de la mascota'});
  }
}

module.exports = obtenerMascota;
