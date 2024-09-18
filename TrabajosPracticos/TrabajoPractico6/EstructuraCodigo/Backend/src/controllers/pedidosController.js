const pedidosOrm = require('../orm/pedidosOrm');
const emailService = require('../services/emailService');
const notificacionPushService = require('../services/notificacionPushService');
const soporteOrm = require('../orm/soporteOrm');

module.exports = {
getAllPedidos: async (req, res) => {
    try {
        const pedidos = await pedidosOrm.getAll();

        const tiposCarga = await soporteOrm.getAll('TiposCarga');

        // Obtener todas las localidades y provincias
        const localidades = await soporteOrm.getAll('Localidades');
        const provincias = await soporteOrm.getAll('Provincias');

        // Mapear los pedidos con los nombres de las localidades y provincias
        const pedidosConLocalidadesYProvincias = pedidos.map((pedido) => {
        const tipoCarga = tiposCarga.find((tip) => tip.id == pedido.tipoCarga);

        // Buscar la localidad y provincia para domicilioRetiro
        const localidadRetiro = localidades.find((loc) => loc.id == pedido.domicilioRetiro.id_localidad);
        const provinciaRetiro = localidadRetiro ? provincias.find((prov) => prov.id == localidadRetiro.id_provincia) : null;

        // Buscar la localidad y provincia para domicilioEntrega
        const localidadEntrega = localidades.find((loc) => loc.id == pedido.domicilioEntrega.id_localidad);
        const provinciaEntrega = localidadEntrega ? provincias.find((prov) => prov.id == localidadEntrega.id_provincia) : null;

        // Retornar el pedido con los nombres de las localidades y provincias actualizados
        return {
            ...pedido,
            tipoCarga: tipoCarga.nombre,
            domicilioRetiro: {
            ...pedido.domicilioRetiro,
            localidad: localidadRetiro ? localidadRetiro.nombre : 'Localidad no encontrada',
            provincia: provinciaRetiro ? provinciaRetiro.nombre : 'Provincia no encontrada',
            },
            domicilioEntrega: {
            ...pedido.domicilioEntrega,
            localidad: localidadEntrega ? localidadEntrega.nombre : 'Localidad no encontrada',
            provincia: provinciaEntrega ? provinciaEntrega.nombre : 'Provincia no encontrada',
            },
        };
        });

        console.log(pedidosConLocalidadesYProvincias);
        res.status(200).json(pedidosConLocalidadesYProvincias);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los pedidos.' });
    }
},
createPedido: async (req, res) => {
    try {
        const newPedido = req.body;
        const expoPushToken = newPedido.expoPushToken;  // Asegúrate de obtener el token desde el request
    
        // Insertar el pedido en la base de datos
        await pedidosOrm.insert(newPedido);
    
        // Enviar el correo electrónico
        await emailService.sendEmail('Nuevo pedido en la zona', newPedido);
    
        // Enviar notificación push
        if (expoPushToken) {
            console.log(expoPushToken)
            console.log({
                title: 'Pedido creado',
                body: 'Tu pedido ha sido registrado exitosamente.',
                data: { pedidoId: newPedido._id },
        })
            await notificacionPushService.sendPushNotification(expoPushToken, {
                title: 'Pedido creado',
                body: 'Tu pedido ha sido registrado exitosamente.',
                data: { pedidoId: newPedido._id },
        });
        }
    
        res.status(201).json({ message: 'Pedido creado exitosamente.' });
    } catch (error) {
        console.error('Error en createPedido:', error);
        res.status(500).send({ error: 'Error al crear el pedido.' });
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