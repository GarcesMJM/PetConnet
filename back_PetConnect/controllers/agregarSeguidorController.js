const admin = require('firebase-admin');

async function agregarSeguidor(req, res) {
    try {
      const { usuario, seguidor } = req.body;
  
      // Obtiene el documento del usuario
      const snapshot = await admin.firestore().collection('usuarios').where('usuario', '==', usuario).get();
      const snapshot2 = await admin.firestore().collection('usuarios').where('usuario', '==', seguidor).get();

      if (snapshot.empty) {
        console.log('No se encontró al usuario');
        return res.status(404).send({message: 'No se encontró al usuario'});
      } else {
        // Aquí asumimos que solo hay un documento que coincide con la consulta
        const doc = snapshot.docs[0];
        const usuarioData = doc.data();
  
        // Agrega el seguidor a la lista de seguidores
        usuarioData.seguidores.push(seguidor);
  
        // Actualiza el documento del usuario
        await doc.ref.set(usuarioData);

        // Agrega el usuario a la lista de seguidos
        const doc2 = snapshot2.docs[0];
        const usuarioData2 = doc2.data();

        usuarioData2.seguidos.push(usuario);
        await doc2.ref.set(usuarioData2);
        
  
        console.log('Seguidor agregado:', seguidor);
        return res.status(200).send({message: 'Seguidor agregado'});
      }
    } catch (error) {
      console.log('Error al agregar el seguidor:', error);
      return res.status(500).send({message: 'Error al agregar el seguidor'});
    }
  }

module.exports = agregarSeguidor;
