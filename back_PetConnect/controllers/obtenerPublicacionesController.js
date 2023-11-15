const admin = require('firebase-admin');

async function obtenerPublicaciones(req, res) {
  try {
    // Obtiene todos los documentos de la colección 'publicaciones'
    const snapshot = await admin.firestore().collection('publicaciones').get();

    // Crea un array para almacenar las publicaciones
    let publicaciones = [];

    // Itera sobre cada documento de la colección 'publicaciones'
    for (let doc of snapshot.docs) {
      // Comprueba que 'doc_mascota' es una cadena de texto válida
      if (typeof doc.data().doc_mascota === 'string' && doc.data().doc_mascota.trim() !== '') {
        // Obtiene el documento de la mascota correspondiente
        const mascotaSnapshot = await admin.firestore().collection('mascotas').doc(doc.data().doc_mascota).get();

        // Si no se encuentra la mascota, continua con la siguiente iteración
        if (!mascotaSnapshot.exists) {
          continue;
        }

        // Añade los campos 'foto_perfil' y 'nombre' al documento de la publicación
        let publicacion = doc.data();
        publicacion.foto_perfil = mascotaSnapshot.data().imagen;
        publicacion.nombre = mascotaSnapshot.data().nombre;

        // Añade la publicación al array de publicaciones
        publicaciones.push(publicacion);
      } else {
        console.log('doc_mascota no es una cadena de texto válida:', doc.data().doc_mascota);
      }
    }

    // Retorna las publicaciones
    return res.status(200).send(publicaciones);
  } catch (error) {
    console.log('Error al obtener las publicaciones:', error);
    return res.status(500).send({message: error});
  }
}

module.exports = obtenerPublicaciones;
