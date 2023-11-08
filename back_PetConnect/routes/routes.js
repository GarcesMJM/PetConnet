const express = require('express');
const router = express.Router();
const registroController = require('../controllers/registroController');
const iniciarsesionController = require('../controllers/iniciarsesionController');
const obtenerUsuarioController = require('../controllers/obtenerUsuarioController');
const cambiarFotoPerfilController = require('../controllers/cambiarFotoPerfilController');
const obtenerMascotaController = require('../controllers/obtenerMascotaController');

// Rutas de autenticación
router.post('/register', registroController);

router.post('/iniciarsesion', iniciarsesionController);

router.post('/obtenerusuario', obtenerUsuarioController.obtenerUsuario);

router.post('/usuariopornombre', obtenerUsuarioController.obtenerUsuarioPorNombre);

router.post('/cambiarfoto', cambiarFotoPerfilController);

router.post('/obtenermascota', obtenerMascotaController);


module.exports = router;