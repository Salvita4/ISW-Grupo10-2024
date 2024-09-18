/** @format */
const nodemailer = require("nodemailer");
const { getTransportistasByLocalidad } = require("../orm/transportistasOrm");
const  soporteOrm  = require('../orm/soporteOrm');


module.exports = {
    sendEmail: async (asunto, pedido) => {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "nikitolima123456789@gmail.com",
                pass: process.env.MAIL_TOKEN,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
        try {
            let transportistas = await getTransportistasByLocalidad(pedido.domicilioRetiro.id_localidad);
            let tipoCarga = await soporteOrm.getAll("TiposCarga");
            tipoCarga = tipoCarga.filter((tipo) => tipo.id === pedido.tipoCarga)[0].nombre;        
            let calleRetiro = pedido.domicilioRetiro.calle;
            let numeroRetiro = pedido.domicilioRetiro.numero;
            let localidadRetiro = await soporteOrm.getAll("Localidades");
            localidadRetiro = localidadRetiro.filter((localidad) => localidad.id === parseInt(pedido.domicilioRetiro.id_localidad))[0].nombre;      
            let provinciaRetiro = await soporteOrm.getAll("Provincias")     
            provinciaRetiro = provinciaRetiro.filter((provincia)=> provincia.id === parseInt(pedido.domicilioRetiro.id_provincia))[0].nombre;
            let referenciaRetiro = pedido.domicilioRetiro.referencia
            let calleEntrega = pedido.domicilioEntrega.calle;
            let numeroEntrega = pedido.domicilioEntrega.numero;
            let localidadEntrega = await soporteOrm.getAll("Localidades");
            localidadEntrega = localidadEntrega.filter((localidad) => localidad.id === parseInt(pedido.domicilioEntrega.id_localidad))[0].nombre;    
            let provinciaEntrega = await soporteOrm.getAll("Provincias");
            provinciaEntrega = provinciaEntrega.filter((provincia)=> provincia.id === parseInt(pedido.domicilioEntrega.id_provincia))[0].nombre;
            let referenciaEntrega = pedido.domicilioEntrega.referencia;
            let fechaRetiro = new Date(pedido.fechaRetiro).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
            let fechaEntrega = new Date(pedido.fechaEntrega).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });

            let cuerpo = `Se ha regitrado una nueva solicitud de envio en la zona: \n
            Tipo de Carga: ${tipoCarga} \n
            Domicilio de Retiro: ${calleRetiro} ${numeroRetiro}, ${localidadRetiro}, ${provinciaRetiro} ${referenciaRetiro? ",Referencia: " + referenciaRetiro : ""} \n
            Domicilio de Entrega: ${calleEntrega} ${numeroEntrega}, ${localidadEntrega}, ${provinciaEntrega} ${referenciaEntrega ? ",Referencia: " + referenciaEntrega : ""} \n
            Fecha de Retiro: ${fechaRetiro} \n
            Fecha de Entrega: ${fechaEntrega} \n
            TangoApp®`;           
            transportistas.forEach((transportista) => {
                transporter.sendMail({
                    from: "nikitolima123456789@gmail.com",
                    to: transportista.email,
                    subject: asunto,
                    text: cuerpo,
                });
            });
            console.log("Email enviado");
        } catch (error) {
            console.log(error);
        }
    },
};
