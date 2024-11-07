const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000; // Cambia el puerto si es necesario

// Configurar body-parser para leer los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para el formulario de contacto
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // Configurar Nodemailer para enviar a través de Gmail
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tu_correo@gmail.com',
            pass: 'tu_contraseña_de_gmail'
        }
    });

    // Configurar el contenido del correo
    let mailOptions = {
        from: email,
        to: 'tu_correo@gmail.com',  // Cambia a tu correo
        subject: `Nuevo mensaje de contacto de ${name}`,
        text: `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Correo enviado correctamente.' });
    } catch (error) {
        res.status(500).json({ message: 'Error al enviar el correo.' });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
