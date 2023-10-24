const admin = require('firebase-admin');
const db = admin.firestore();
const usersRef = db.collection('usuarios');
const { auth } = require('firebase-admin');

async function iniciarsesion(req, res) {
  try {
    console.log('Controlador de inicio de sesion llamado');
    const { email, password } = req.body;

    const usernameExists = await usersRef.where('email', '==', email).get();
    const passwordExists = await usersRef.where('password', '==', password).get();

    if ( !usernameExists.empty && !passwordExists.empty){
      console.log("inició sesión")
    }
    console.log('hola');

    res.status(201).send({ message: 'Ingresó exitosamente' });
  } catch (error) {
    console.error(error);

    // Puedes manejar errores específicos aquí, por ejemplo, verificar si el error es debido a credenciales inválidas
    if (error.code === 'auth/wrong-password') {
      return res.status(400).send({ message: 'Contraseña incorrecta' });
    } else if (error.code === 'auth/user-not-found') {
      return res.status(404).send({ message: 'Usuario no encontrado' });
    }

    res.status(500).send({ message: 'Error al iniciar sesión' });
  }
}

module.exports = iniciarsesion;

