/** @format */

const { MongoClient } = require("mongodb");
const uri = process.env.MONGO; //dotenv
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let conexion;

conectarMongoDB = async () => {
    if (!conexion) {
        try {
            await client.connect();
            conexion = client.db("TangoApp");
            console.log(`Conectado a BD ${conexion.databaseName}`);
        } catch (error) {
            console.error("Error al conectar a MongoDB:", error);
            throw error;
        }
    }
    return conexion;
};

module.exports = { conectarMongoDB };
