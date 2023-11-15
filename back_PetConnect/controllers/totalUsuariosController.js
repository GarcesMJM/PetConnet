const admin = require('firebase-admin');

async function obtenerTotalUsuarios(req, res) {
  try {
    const snapshot = await admin.firestore().collection('usuarios').get();
    const totalUsuarios = snapshot.size;

    return res.status(200).json({ totalUsuarios });
  } catch (error) {
    console.error('Error al obtener el número total de usuarios:', error);
    return res.status(500).json({ message: 'Error al obtener el número total de usuarios' });
  }
}

module.exports = {
  obtenerTotalUsuarios,
};