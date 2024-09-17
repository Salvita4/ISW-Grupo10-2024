/** @format */

const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const { conectarMongoDB } = require("./orm/conexion");

// Conexión a la base de datos
conectarMongoDB();

// Declaracion de Rutas
const routes = require("./routes/_index");

// Declaracion de Middlewares
const errorMiddleware = require("./middlewares/errorMiddleware");

// Middleware para parsear JSON
app.use(express.json());
// Middelware CORS
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

// Rutas para cada colección
app.use("/api", routes);

// // Middleware de errores
// app.use(errorMiddleware);

// Puerto de escucha
const PORT = process.env.APP_PORT;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
