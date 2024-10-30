const { conectarMongoDB } = require("./conexion");

module.exports = {
    getTransportistasByLocalidad: async (id_localidad)=>{
        try {
            const db = await conectarMongoDB();
            const collection = db.collection("Transportistas");
            const resultado = await collection.find({id_localidad: parseInt(id_localidad)}).toArray();
            return resultado;
        } catch (error) {
            console.log("Error al obtener los registros:", error);
        }
    }
}