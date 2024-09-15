const express = require('express');
const router = express.Router();
const soporteController = require('../controllers/soporteController');

// Define rutas y sus controladores

router.get('/:coleccion', soporteController.getAll);

module.exports = router;