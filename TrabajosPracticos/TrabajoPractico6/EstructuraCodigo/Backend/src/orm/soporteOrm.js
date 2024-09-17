const { conectarMongoDB } = require("./conexion");
module.exports = {
getAll: async (coleccion) => {
    try {
        const db = await conectarMongoDB();
        const collection = db.collection(coleccion);
        const resultado = await collection.find({}).toArray();
        return resultado;
    } catch (error) {
        console.log("Error al obtener los registros:", error);
    }
}
};