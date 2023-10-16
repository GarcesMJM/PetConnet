const admin = require('firebase-admin');
const db = admin.firestore();
const usersRef = db.collection('Usuarios');

async function registro(req, res) {
  try {
    const { email, password, username } = req.body;

    // Verificar si el nombre de usuario ya está en uso
    const usernameExists = await usersRef.where('username', '==', username).get();

    if (!usernameExists.empty) {
      return res.status(400).send({ message: 'El nombre de usuario ya está en uso' });
    }

    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName: username,
    });

    await usersRef.doc(userRecord.uid).set({
      email,
      username,
    });

    res.status(201).send({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error al registrar el usuario' });
  }
}

module.exports = registro;