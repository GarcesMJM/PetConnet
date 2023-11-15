// totalMascotasController.js
const admin = require('firebase-admin');

async function obtenerTotalMascotas(req, res) {
  try {
    const snapshot = await admin.firestore().collection('mascotas').get();
    const totalMascotas = snapshot.size;

    return res.status(200).json({ totalMascotas });
  } catch (error) {
    console.error('Error al obtener el número total de mascotas:', error);
    return res.status(500).json({ message: 'Error al obtener el número total de mascotas' });
  }
}

module.exports = {
  obtenerTotalMascotas,
};
