const express = require('express');
const routes = express.Router();

// Define las rutas de la API
const  tiposDeCargaRoutes = require('./tiposDeCargaRoute');

// Define las rutas y sus controladores
routes.use('/tiposDeCarga', tiposDeCargaRoutes);

// Maneja las excepciones de las rutas
routes.use("*", (req, res, next) => {
  const error = new Error(`Ruta '${req.originalUrl}' no encontrada.`);
  next(error);
});

module.exports = routes;