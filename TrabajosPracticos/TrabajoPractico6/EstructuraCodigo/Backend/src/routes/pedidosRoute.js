const express = require('express');
const router = express.Router();
const pedidosController   = require('../controllers/pedidosController');

router.post("/", pedidosController.createPedido);
router.get("/", pedidosController.getAllPedidos);
router.get("/:id", pedidosController.getPedidoById);

module.exports = router;