const admin = require('firebase-admin');

async function eliminarSeguidor(req, res) {
    try {
      const { usuario, seguidor } = req.body;
  
      // Obtiene el documento del usuario
      const snapshot = await admin.firestore().collection('usuarios').where('usuario', '==', usuario).get();

      if (snapshot.empty) {
        console.log('No se encontró al usuario');
        return res.status(404).send({message: 'No se encontró al usuario'});
      } else {
        // Aquí asumimos que solo hay un documento que coincide con la consulta
        const doc = snapshot.docs[0];
        const usuarioData = doc.data();
  
        // Elimina el seguidor de la lista de seguidores
        const index = usuarioData.seguidores.indexOf(seguidor);
        if (index > -1) {
          usuarioData.seguidores.splice(index, 1);
        }
  
        // Actualiza el documento del usuario
        await doc.ref.set(usuarioData);
  
        console.log('Seguidor eliminado:', seguidor);
        return res.status(200).send({message: 'Seguidor eliminado'});
      }
    } catch (error) {
      console.log('Error al eliminar el seguidor:', error);
      return res.status(500).send({message: 'Error al eliminar el seguidor'});
    }
  }

module.exports = eliminarSeguidor;
