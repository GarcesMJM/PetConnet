const express = require('express');
const router = express.Router();
const registroController = require('../controllers/registroController');

// Rutas de autenticación
router.post('/register', registroController);


module.exports = router;