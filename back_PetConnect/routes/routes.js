const express = require('express');
const router = express.Router();
const registroController = require('../controllers/registroController');
const iniciarsesionController = require('../controllers/iniciarsesionController');
const obtenerUsuarioController = require('../controllers/obtenerUsuarioController');
const obtenerMascotaController = require('../controllers/obtenerMascotaController');

// Rutas de autenticación
router.post('/register', registroController);

router.post('/iniciarsesion', iniciarsesionController);

router.post('/obtenerusuario', obtenerUsuarioController);

router.post('/obtenermascota', obtenerMascotaController);


module.exports = router;