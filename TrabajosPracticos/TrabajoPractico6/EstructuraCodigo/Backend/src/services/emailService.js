/** @format */
const nodemailer = require("nodemailer");
const { getTransportistasByLocalidad } = require("../orm/transportistasOrm");
module.exports = {
    sendEmail: async (asunto, cuerpo, id_localidad) => {
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
            let transportistas = await getTransportistasByLocalidad(id_localidad);
            transportistas.forEach((transportista) => {
                transporter.sendMail({
                    from: "nikitolima123456789@gmail.com",
                    to: transportista.email,
                    subject: asunto,
                    text: cuerpo,
                });
            });
        } catch (error) {
            console.log(error);
        }
    },
};
