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

      return res.status(200).send(usuario);
    }
  } catch (error) {
    console.log('Error al obtener la información del usuario:', error);
    return res.status(500).send({message: 'Error al obtener la información del usuario'});
  }
}

async function obtenerUsuarioPorNombre(req, res) {
  try {
    const { id } = req.body;

    // Usa el nombre del usuario para obtener su información de Firestore
    const snapshot = await admin.firestore().collection('usuarios').where('usuario', '==', id).get();

    if (snapshot.empty) {
      console.log('No se encontró al usuario');
      return res.status(404).send({message: 'No se encontró al usuario'});
    } else {
      const doc = snapshot.docs[0];
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

      // Obtiene la información de los seguidores del usuario
      const seguidoresPromesas = usuario.seguidores.map(nombreSeguidor => 
        admin.firestore().collection('usuarios').where('usuario', '==', nombreSeguidor).get()
      );
      const seguidoresDocs = await Promise.all(seguidoresPromesas);
      const seguidores = seguidoresDocs.map(snapshot => {
        if (!snapshot.empty) {
          return snapshot.docs[0].data();
        }
      });

      // Añade la información de los seguidores al usuario
      usuario.seguidores = seguidores;

      return res.status(200).send(usuario);
    }
  } catch (error) {
    console.log('Error al obtener la información del usuario:', error);
    return res.status(500).send({message: 'Error al obtener la información del usuario'});
  }
}

async function obtenerUsuarioPorNombre2(req, res) {
  try {
    const { token, seguidores } = req.body;

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

      // Transforma el array de objetos en un array de nombres de usuario
      const nombresSeguidores = seguidores.map(seguidor => seguidor.usuario);

      // Verifica si el usuario está siguiendo a alguno de los seguidores
      usuario.siguiendo = nombresSeguidores.includes(usuario.usuario);

      console.log('Información del usuario:', usuario.usuario);
      console.log("Lista:", seguidores);
      console.log(usuario.siguiendo);
      return res.status(200).send(usuario);
    }
  } catch (error) {
    console.log('Error al obtener la información del usuario:', error);
    return res.status(500).send({message: 'Error al obtener la información del usuario'});
  }
}


module.exports = {
  obtenerUsuario,
  obtenerUsuarioPorNombre,
  obtenerUsuarioPorNombre2
}
