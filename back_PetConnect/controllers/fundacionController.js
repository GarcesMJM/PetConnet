const admin = require('firebase-admin');

async function solicitarFundacion(req, res) {
  try {
    const { nombreUsuario, fechaHora } = req.body;

    // Convierte la fecha y hora a un objeto Date de JavaScript
    const fechaHoraObjeto = new Date(fechaHora);

    // Formatea la fecha y hora en el formato 'hora/día/mes/año'
    const opciones = { hour: '2-digit', minute: '2-digit', second: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' };
    const fechaHoraFormateada = fechaHoraObjeto.toLocaleString('es-ES', opciones);

    // Busca el usuario en la colección 'usuarios'
    const snapshot = await admin.firestore().collection('usuarios').where('usuario', '==', nombreUsuario).get();

    if (snapshot.empty) {
      console.log('No se encontró al usuario');
      return res.status(404).send({message: 'No se encontró al usuario'});
    } else {
      const doc = snapshot.docs[0];

      // Cambia usuario.fundacion a 1
      await doc.ref.update({
        fundacion: 1,
      });

      // Crea un nuevo documento en la colección 'solicitudesFundacion'
      await admin.firestore().collection('solicitudesFundacion').add({
        usuario: nombreUsuario,
        fecha_hora: fechaHoraFormateada,
      });

      return res.status(200).send({message: 'Solicitud de fundación enviada correctamente'});
    }
  } catch (error) {
    console.log('Error al solicitar la fundación:', error);
    return res.status(500).send({message: 'Error al solicitar la fundación'});
  }
}

async function obtenerSolicitudes(req, res) {
    try {
      // Obtiene todos los documentos de la colección 'solicitudesFundacion'
      const snapshot = await admin.firestore().collection('solicitudesFundacion').get();
  
      // Crea un array para almacenar las solicitudes
      let solicitudes = [];
  
      // Itera sobre cada documento de la colección 'solicitudesFundacion'
      for (let doc of snapshot.docs) {
        // Añade la solicitud al array de solicitudes
        solicitudes.push(doc.data());
      }
  
      // Retorna las solicitudes
      return res.status(200).send(solicitudes);
    } catch (error) {
      console.log('Error al obtener las solicitudes:', error);
      return res.status(500).send({message: 'Error al obtener las solicitudes'});
    }
}


async function aceptarSolicitud(req, res) {
  try {
    const { usuario, decision } = req.body;

    // Busca la solicitud en la colección 'solicitudesFundacion'
    const snapshot = await admin.firestore().collection('solicitudesFundacion').where('usuario', '==', usuario).get();

    if (snapshot.empty) {
      console.log('No se encontró la solicitud');
      return res.status(404).send({message: 'No se encontró la solicitud'});
    } else {
      const doc = snapshot.docs[0];

      // Elimina la solicitud
      await doc.ref.delete();
    }

    // Busca al usuario en la colección 'usuarios'
    const snapshotUsuario = await admin.firestore().collection('usuarios').where('usuario', '==', usuario).get();

    if (snapshotUsuario.empty) {
      console.log('No se encontró al usuario');
      return res.status(404).send({message: 'No se encontró al usuario'});
    } else {
      const docUsuario = snapshotUsuario.docs[0];

      // Modifica usuario.fundacion a 2 si la decisión es true, o a 4 si es false
      await docUsuario.ref.update({
        fundacion: decision ? 2 : 4,
      });
    }

    return res.status(200).send({message: 'Solicitud procesada correctamente'});
  } catch (error) {
    console.log('Error al procesar la solicitud:', error);
    return res.status(500).send({message: 'Error al procesar la solicitud'});
  }
}




module.exports = {
    solicitarFundacion,
    obtenerSolicitudes,
    aceptarSolicitud
  }
