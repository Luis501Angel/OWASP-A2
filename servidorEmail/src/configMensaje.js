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
        <p>Recibimos una solicitud para restablecer su contraseña<p>
        <p>Ingrese a la siguiente URL: <p>
        ${'http://192.168.1.84:9090/resetpw?login=user&token=ee11cbb19052e40b07aac0ca060c23ee'}
        `
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err);
        else
            console.log(info)
    });
}