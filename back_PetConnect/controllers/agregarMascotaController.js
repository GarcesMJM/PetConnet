const admin = require('firebase-admin');

async function agregarMascota(req, res) {
  try {
    const { nombreMascota, urlImagen, nombreUsuario } = req.body;

    // Crea un nuevo documento en la colección 'mascotas'
    const docRef = await admin.firestore().collection('mascotas').add({
      nombre: nombreMascota,
      imagen: urlImagen,
      publicaciones: []
    });

    // Obtiene el documento del usuario de la colección 'usuarios'
    const snapshot = await admin.firestore().collection('usuarios').where('usuario', '==', nombreUsuario).get();

    if (snapshot.empty) {
      console.log('No se encontró al usuario');
      return res.status(404).send({message: 'No se encontró al usuario'});
    } else {
      const doc = snapshot.docs[0];

      // Añade la referencia del documento de la mascota al array 'mascotas' del usuario
      await doc.ref.update({
        mascotas: admin.firestore.FieldValue.arrayUnion(docRef),
      });

      return res.status(200).send({message: 'Mascota agregada correctamente'});
    }
  } catch (error) {
    console.log('Error al agregar la mascota:', error);
    return res.status(500).send({message: 'Error al agregar la mascota'});
  }
}

module.exports = agregarMascota;
