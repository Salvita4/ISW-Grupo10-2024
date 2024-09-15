const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// Declaracion de Rutas
const routes = require('./routes/_index');

// Declaracion de Middlewares
const errorMiddleware = require('./middlewares/errorMiddleware');

// Middleware para parsear JSON
app.use(express.json());
//app.use(cors());

// Rutas para cada colección
 app.use('/api', routes);

// // Middleware de errores
// app.use(errorMiddleware);

// Puerto de escucha
const PORT = process.env.APP_PORT; 
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});