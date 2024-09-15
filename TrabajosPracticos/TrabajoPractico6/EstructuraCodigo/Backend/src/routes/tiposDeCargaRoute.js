const express = require('express');
const router = express.Router();
const tiposDeCargaController = require('../controllers/tiposDeCargaController');

// Define rutas y sus controladores
router.get('/', tiposDeCargaController.getAllTiposDeCarga);
router.get('/:name', tiposDeCargaController.getTiposDeCargaByName);
router.get('/id/:id', tiposDeCargaController.getTipoDeCargaById);
router.post('/', tiposDeCargaController.createTipoDeCarga);
router.put('/:id', tiposDeCargaController.updateTipoDeCarga);
router.put('/toggleStatus/:id', tiposDeCargaController.toggleStatusTipoDeCarga);

module.exports = router;