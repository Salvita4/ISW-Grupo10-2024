const { conectarMongoDB } = require("./conexion");
module.exports = {
insert: async (pedido) => {
    try {
        const db = await conectarMongoDB();
        const collection = db.collection("Pedidos");
        const resultado = await collection.insertOne(pedido);
    } catch (error) {
        console.error("Error al insertar el registro:", error);
    }
},

getAll: async () => {
    try {
        const db = await conectarMongoDB();
        const collection = db.collection("Pedidos");
        const resultado = await collection.find({}).toArray();
        return resultado;
    } catch (error) {
        console.log("Error al obtener los pedidos:", error);
    }
},

getById: async (id) => {
    try {
        const db = await conectarMongoDB();
        const collection = db.collection("Pedidos");
        const resultado = await collection.findOne({ id_pedido: parseInt(id) });    
        return resultado;
    }catch{
        console.log("Error al obtener los pedidos:", error);
    }
}
};

