const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors'); 
const serviceAccount = require('C:\\Users\\Usuario\\Downloads\\clave3');

const app = express();

// Inicializa Firebase con las credenciales
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore(); // Inicialización de Firestore

app.use(cors());
app.use(express.json());

const routes = require('./routes/routes');
app.use('/', routes);

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Ruta para imprimir los usuarios
app.get('/usuarios', async (req, res) => {
  try {
    const usersRef = db.collection('usuarios'); // Asegúrate de que esté como 'Usuarios'
    const snapshot = await usersRef.get();
    const usuarios = snapshot.docs.map(doc => doc.data());
    res.send(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error al obtener los usuarios' });
  }
});

// Escucha en el puerto 3000 o en el puerto especificado por el entorno
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
