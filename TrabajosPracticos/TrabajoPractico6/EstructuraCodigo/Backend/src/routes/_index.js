const express = require('express');
const routes = express.Router();

// Define las rutas de la API
const  soporteRoutes = require('./soporteRoute');
const pedidosRoutes = require('./pedidosRoute');

// Define las rutas y sus controladores
routes.use('/soporte', soporteRoutes);
routes.use('/pedidos', pedidosRoutes);


// Maneja las excepciones de las rutas
routes.use("*", (req, res, next) => {
  const error = new Error(`Ruta '${req.originalUrl}' no encontrada.`);
  next(error);
});

module.exports = routes;