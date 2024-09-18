const  pedidosOrm  = require('../orm/pedidosOrm');
const emailService = require('../services/emailService');
module.exports = {
getAllPedidos: async (req,res)=>{
    try {
        const pedidos = await pedidosOrm.getAll();
        console.log(pedidos)
        res.status(200).json(pedidos);
    } catch (error) {
        res.status(500).json({error: 'Error al obtener los pedidos.'});
    }
},
createPedido: async (req,res)=>{
    try {
        const newPedido = req.body;
        //await pedidosOrm.insert(newPedido);
        await emailService.sendEmail('Nuevo pedido en la zona', newPedido);
        res.status(201).json({message: 'Pedido creado exitosamente.'});
    } catch (error) {
        res.status(500).send({error: 'Error al crear el pedido.'});
    }
},
getPedidoById: async (req,res)=>{
    try {
        const pedidoId = req.params.id;
        const pedido = await pedidosOrm.getById(pedidoId)
        res.status(200).json(pedido);
    } catch (error) {
        res.status(500).json({error: 'Error al obtener el pedido.'});
    }
}
};