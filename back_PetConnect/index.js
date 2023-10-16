const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require('C:\\Users\\Juan Jose\\Downloads\\clave3');

const app = express();

// Inicializa Firebase con las credenciales
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const routes = require('./routes/routes');
app.use('/', routes);

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Escucha en el puerto 3000 o en el puerto especificado por el entorno
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
