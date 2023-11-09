const express = require('express');
const router = express.Router();
const registroController = require('../controllers/registroController');
const iniciarsesionController = require('../controllers/iniciarsesionController');
const obtenerUsuarioController = require('../controllers/obtenerUsuarioController');
const cambiarFotoPerfilController = require('../controllers/cambiarFotoPerfilController');
const obtenerMascotaController = require('../controllers/obtenerMascotaController');
const agregarMascotaController = require('../controllers/agregarMascotaController');
const agregarPublicacionController = require('../controllers/agregarPublicacionController');
const agregarSeguidorController = require('../controllers/agregarSeguidorController');
const eliminarSeguidorController = require('../controllers/eliminarSeguidorController');
// Rutas de autenticación
router.post('/register', registroController);
router.post('/iniciarsesion', iniciarsesionController);
router.post('/obtenerusuario', obtenerUsuarioController.obtenerUsuario);
router.post('/usuariopornombre', obtenerUsuarioController.obtenerUsuarioPorNombre);
router.post('/usuariopornombre2', obtenerUsuarioController.obtenerUsuarioPorNombre2);
router.post('/cambiarfoto', cambiarFotoPerfilController);
router.post('/obtenermascota', obtenerMascotaController);

router.post('/agregarmascota', agregarMascotaController);
router.post('/agregarpublicacion', agregarPublicacionController);
router.post('/agregarseguidor', agregarSeguidorController);
router.post('/eliminarseguidor', eliminarSeguidorController);

module.exports = router;