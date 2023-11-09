const express = require('express');
const router = express.Router();
const registroController = require('../controllers/registroController');
const iniciarsesionController = require('../controllers/iniciarsesionController');
const obtenerUsuarioController = require('../controllers/obtenerUsuarioController');
const cambiarFotoPerfilController = require('../controllers/cambiarFotoPerfilController');
const obtenerMascotaController = require('../controllers/obtenerMascotaController');
const publicarController = require('../controllers/publicarController');

// Rutas de autenticación
router.post('/register', registroController);

router.post('/iniciarsesion', iniciarsesionController);

router.post('/obtenerusuario', obtenerUsuarioController.obtenerUsuario);

router.post('/usuariopornombre', obtenerUsuarioController.obtenerUsuarioPorNombre);

router.post('/cambiarfoto', cambiarFotoPerfilController);

router.post('/obtenermascota', obtenerMascotaController);

router.post('/publicar', publicarController);

module.exports = router;