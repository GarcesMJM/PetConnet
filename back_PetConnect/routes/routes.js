const express = require('express');
const router = express.Router();
const registroController = require('../controllers/registroController');
const iniciarsesionController = require('../controllers/iniciarsesionController');

// Rutas de autenticación
router.post('/register', registroController);

router.post('/iniciarsesion', iniciarsesionController);


module.exports = router;