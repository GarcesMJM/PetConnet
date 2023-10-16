const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require('C:\\Users\\Juan Jose\\Downloads\\clave2');
const registroController = require('./controllers/registroController');

const app = express();

// Inicializa Firebase con las credenciales
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

//Registro, inicio de sesión
app.post('/registro', registroController);

// Escucha en el puerto 3000 o en el puerto especificado por el entorno
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});