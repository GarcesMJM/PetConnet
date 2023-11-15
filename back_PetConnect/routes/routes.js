const express = require('express');
const router = express.Router();
const registroController = require('../controllers/registroController');
const iniciarsesionController = require('../controllers/iniciarsesionController');
const obtenerUsuarioController = require('../controllers/obtenerUsuarioController');
const cambiarFotoPerfilController = require('../controllers/cambiarFotoPerfilController');
const obtenerMascotaController = require('../controllers/obtenerMascotaController');
const publicarController = require('../controllers/publicarController');
const agregarMascotaController = require('../controllers/agregarMascotaController');
const agregarPublicacionController = require('../controllers/agregarPublicacionController');
const agregarSeguidorController = require('../controllers/agregarSeguidorController');
const eliminarSeguidorController = require('../controllers/eliminarSeguidorController');
const obtenerPublicacionesController = require('../controllers/obtenerPublicacionesController');
const totalUsuariosController = require('../controllers/totalUsuariosController'); // Importa el controlador
const totalMascotasController = require('../controllers/totalMascotasController'); // Importa el nuevo controlador


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
router.post('/publicar', publicarController);
router.post('/agregarseguidor', agregarSeguidorController);
router.post('/eliminarseguidor', eliminarSeguidorController);

router.get('/obtenerpublicaciones', obtenerPublicacionesController);
router.get('/obtenertotalusuarios', totalUsuariosController.obtenerTotalUsuarios);
router.get('/obtenertotalmascotas', totalMascotasController.obtenerTotalMascotas);


module.exports = router;