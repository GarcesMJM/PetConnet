const admin = require('firebase-admin');

async function cambiarFotoPerfil(req, res) {
  try {

    const { foto_perfil, Name, Residencia, Origen, Phone, nombreUsuario, token } = req.body;
    console.log(Name);
    
    const snapshot = await admin.firestore().collection('usuarios').where('usuario', '==', nombreUsuario).get();

    if (snapshot.empty) {
      console.log('No se encontró al usuario');
      return res.status(404).send({message: 'No se encontró al usuario'});
    } else {
      const doc = snapshot.docs[0];

      // Añade la referencia del documento de la mascota al array 'mascotas' del usuario
      await doc.ref.update({
        foto_perfil: foto_perfil, 
        Nombre: Name,
        Residencia: Residencia,
        Origen: Origen, 
        telefono:Phone
      });

      return res.status(200).send({message: 'Usuario editado con éxito'});
    }

  } catch (error) {
    console.log('Error al obtener la información del usuario:', error);
    return res.status(500).send({message: 'Error al obtener la información del usuario'});
  }
}

module.exports = cambiarFotoPerfil;
