const admin = require('firebase-admin');

async function obtenerMascotaAleatoria(req, res) {
  try {
    // Obtiene todas las mascotas
    const mascotasSnapshot = await admin.firestore().collection('mascotas').get();

    if (mascotasSnapshot.empty) {
      console.log('No hay mascotas en la base de datos');
      return res.status(404).send({ message: 'No hay mascotas en la base de datos' });
    }

    // Convierte el conjunto de mascotas en un array
    const mascotas = mascotasSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    console.log('Total de mascotas:', mascotas.length);
    console.log('Mascotas:', mascotas);

    // Elige una mascota aleatoria
    const mascotaAleatoria = mascotas[Math.floor(Math.random() * mascotas.length)];

    // Devuelve la mascota aleatoria al cliente
    return res.status(200).send(mascotaAleatoria);
  } catch (error) {
    console.log('Error al obtener una mascota aleatoria:', error);
    return res.status(500).send({ message: 'Error al obtener una mascota aleatoria' });
  }
}


module.exports = obtenerMascotaAleatoria;
