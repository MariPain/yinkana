const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const crypto = require("crypto");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

function checkEmail(emailOrNot) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    if (!regexEmail.test(emailOrNot)) {
        return false;
    }
    return true;
}

function checkPassword(passOrNot) {
    if (passOrNot.length < 10 || passOrNot.length > 20) {
        return false;
    }

    return true;

}

app.post('/signup', (req, res) => {
    let subject = "Confirmación de correo electrónico"
    let id = crypto.randomBytes(20).toString('hex');
    let str = " /checkEmail?token=" + id;
    let text = "Haz click en el siguiente enlace para confirmar tu correo:" + str
    let email = req.body.email
    let password = req.body.password
    console.log(req.body.password)
    if (!checkEmail(email)) {
        res.redirect('/index.html')
            // redirige a Index.html
    } else if (!checkPassword(password)) {
        res.redirect('/index.html')
            // redirigir a /index.html ...
    } else {
        sendMail(email, subject, text)
        res.redirect('/confirmEmail')
    }
});

// redirigir a /index.html ...

function sendMail(email, subject, text) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'arena.thebridge@gmail.com',
            pass: 'thebridge'
        }
    });

    // var result = str.link("https://www.w3schools.com");
    let mailOptions = {
        from: 'arena.thebridge@gmail.com',
        to: email,
        subject: subject, //'',
        text: text //'' + str
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else
            console.log('Email sent: ' + info.response);
    });
}

// res.redirect('/confirmEmail')

// Otras validaciones

app.listen(3000, function() {
    console.log('Servidor web escuchando en el puerto 3000');
});