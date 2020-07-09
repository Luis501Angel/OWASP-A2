const nodemailer = require('nodemailer');

module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        secure: false,
        service: 'gmail',
        auth: {
            user: 'empresaurios.uv.1444@gmail.com', //Email
            pass: 'aldodanielluis' //Clave
        }
    });

    const mailOptions = {
        from: `"${'Vulnerabilidades'}  👨‍💻" <${formulario.email}`,
        to: `"${formulario.correo}`, //Destinatario
        subject: 'Recuperar contraseña 🔑',
        html: `
        <strong>Pulse aqui para recuperar su contraseña: </strong>${'Recuperar contraseña'}
        `
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err);
        else
            console.log(info)
    });
}