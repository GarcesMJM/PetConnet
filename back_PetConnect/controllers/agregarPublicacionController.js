const admin = require('firebase-admin');

async function agregarPublicacion(req, res) {
  try {
    const { idDocMascota, urlImagen, textoPublicacion, usuario} = req.body;

    // Crea un nuevo documento en la colección 'publicaciones'
    const docRef = await admin.firestore().collection('publicaciones').add({
      imagen: urlImagen,
      descripcion: textoPublicacion,
      comentarios: [],
      likes: [],
      usuario: usuario,
      doc_mascota: idDocMascota
    });

    // Obtiene el documento de la mascota de la colección 'mascotas'
    const snapshot = await admin.firestore().collection('mascotas').doc(idDocMascota).get();

    if (!snapshot.exists) {
      console.log('No se encontró la mascota');
      return res.status(404).send({message: 'No se encontró la mascota'});
    } else {
      const doc = snapshot;

      // Añade la referencia del documento de la publicación al array 'publicaciones' de la mascota
      await doc.ref.update({
        publicaciones: admin.firestore.FieldValue.arrayUnion(docRef),
      });

      return res.status(200).send({message: 'Publicación agregada correctamente'});
    }
  } catch (error) {
    console.log('Error al agregar la publicación:', error);
    return res.status(500).send({message: 'Error al agregar la publicación'});
  }
}

module.exports = agregarPublicacion;
